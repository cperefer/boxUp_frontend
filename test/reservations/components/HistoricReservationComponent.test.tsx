import { beforeEach, describe, expect, it, vi } from "vitest";
import { act, render, renderHook, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from "react-router";
import { HistoricReservationComponent } from "@/reservations/components/HistoricReservationComponent"
import { useAuthStore } from "@/store/authStore";
import * as useReservations from "@/hooks/useReservations";
import { NextReservationsMock } from "@/mocks/NextReservations.mock";
import type { Reservation } from "@/interfaces/Classes";
import * as useCancelReservation from "@/hooks/useCancelReservation";

describe('<HistoricReservationComponent />', () => {
  const useReservationSpy = vi.spyOn(useReservations, 'useReservations');

  beforeEach(async () => {
    const { result } = renderHook(() => useAuthStore());
    await act(async () => {
      await result.current.login("a@a.es", "1234abcd");
    });
  });

  it('should return empty without user', () => {
    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.logout();
    });

    const { container } = render(<HistoricReservationComponent />);

    expect(container.querySelector('p')).toBeFalsy()
  });

  it('should return anything if user is logged in', () => {
    const { container } = render(<HistoricReservationComponent />);

    expect(container.querySelector('p')?.innerHTML).toContain('Histórico de reservas')
  });

  it('should call useReservations with userId', () => {
    const { result } = renderHook(() => useAuthStore());

    expect(useReservationSpy).toHaveBeenCalledWith(result.current.user?.id);
  });

  it('should render skeleton while loading', () => {
    const { container } = render(<HistoricReservationComponent />);


    useReservationSpy.mockReturnValue({
      data: [],
      loading: true
    })

    expect(container.innerHTML).toContain('react-loading-skeleton');
    expect(container.innerHTML).not.toContain('flex flex-row border-2 border-cyan-100 shadow-md min-h-25 rounded-2xl');
  });

  it('should remove skeleton once data is loaded', async () => {
    useReservationSpy.mockReturnValue({
      data: [],
      loading: true
    })

    const { rerender, container } = render(
      <MemoryRouter>
        <HistoricReservationComponent />
      </MemoryRouter>
    );

    expect(container.innerHTML).toContain('react-loading-skeleton');

    useReservationSpy.mockReturnValue({
      data: [...NextReservationsMock],
      loading: false
    })

    rerender(
      <MemoryRouter>
        <HistoricReservationComponent />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(container.innerHTML).not.toContain('react-loading-skeleton');
    });
  });

  it('should render reservations from list without cancel button', async () => {
    useReservationSpy.mockReturnValue({
      data: [...NextReservationsMock],
      loading: false
    })

    const { container } = render(
      <MemoryRouter>
        <HistoricReservationComponent />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(container.innerHTML).toContain('flex flex-row border-2 border-cyan-100 shadow-md min-h-25 rounded-2xl');
      expect(container.innerHTML).toContain('WOD de navidad');
      expect(container.innerHTML).not.toContain('bg-error');
    });
  });

  it('should render reservations and trigger cancelation', async () => {
    const useCancelReservationSpy = vi.spyOn(useCancelReservation, 'useCancelReservation');
    const user = userEvent.setup();
    const cancelabeReservation: Reservation = {
      id: 99,
      type: 'CrossFit',
      date: Date.now() + 1000 * 60 * 60
    }

    useReservationSpy.mockReturnValue({
      data: [...NextReservationsMock, cancelabeReservation],
      loading: false
    })

    const { container } = render(
      <MemoryRouter>
        <HistoricReservationComponent />
      </MemoryRouter>
    );

    let el: Element | null = null;

    await waitFor(async () => {
      el = container.querySelector('.bg-error')
      expect(el).toBeDefined();
      console.log(el?.innerHTML)
    });

    if (el !== null) {
      await user.click(el);
      expect(useCancelReservationSpy).toHaveBeenCalledWith(99)
    }
  });
});