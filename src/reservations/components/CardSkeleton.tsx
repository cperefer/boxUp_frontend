import Skeleton from 'react-loading-skeleton';

export const CardSkeleton = ({ cardItems }: { cardItems: number }) => {
  const skeletonItems = Array(cardItems).fill(0);
  return skeletonItems.map((_, index) => (
    <li
      className="border-b border-gray-100 text-sm sm:text-base flex gap-4 items-center p-4"
      key={index}
    >
      <Skeleton width={100} height={100} />
      <Skeleton count={2} containerClassName="flex-1" style={{ marginBottom: '10px' }} />
    </li>
  ));
};