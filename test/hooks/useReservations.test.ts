import { describe, expect, it } from "vitest";
import { renderHook, waitFor } from '@testing-library/react';
import { useReservations } from "@/hooks/useReservations";

describe('useReservations', () => { 
  it('should return empty data without id', () => {
    const { result } = renderHook(() => useReservations(''));

    expect(result.current.data).toStrictEqual([]);
  });

  it('should be loading while retrieving info', () => {
    const { result } = renderHook(() => useReservations('1'));

    console.log(result)
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toStrictEqual([]);
  });

  it('should return reservations data', async () => {
    const { result } = renderHook(() => useReservations('1'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data.length).toBe(6);
    expect(result.current.data[0]).toMatchObject({
      id: expect.any(Number),
      type: expect.any(String),
      date: expect.any(Number),
    });
  });
})