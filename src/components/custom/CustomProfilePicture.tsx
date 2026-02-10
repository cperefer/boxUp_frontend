const sizes = {
  sm: "w-15 h-15",
  md: "w-25 h-25",
};

type Size = keyof typeof sizes;

interface Props {
  size?: Size;
  url?: string;
}

export const CustomProfilePicture = ({ size = "md", url }: Props) => {
  return (
    <div className={`${sizes[size]} rounded-full bg-amber-300 my-3 `}>
      <img
        className="rounded-full w-full h-full"
        src={url ?? "/profile.jpg"}
        alt=""
      />
    </div>
  );
};
