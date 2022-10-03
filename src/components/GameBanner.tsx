interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a className="rounded-lg overflow-hidden cursor-pointer">
      <img className="rounded-lg" src={props.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-md ">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
