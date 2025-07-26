import { OrbitingCircles } from "./OrbitIcons";
export function FrameWorks() {
    const platforms = ['facebook', 'instagram', 'letter-x', 'youtube', 'linkedin',
      'telegram', 'influencer1', 'influencer2', 'socialMarketing']
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {platforms.map((platform, index) => 
          (
            <Icon key={index} src={`assets/logos/${platform}.png`} />   
          )
        )}
      </OrbitingCircles>
      <OrbitingCircles 
        iconSize={30} 
        radius={100} 
        reverse speed={2}>
          {platforms.map((platform, index) => 
          (
            <Icon key={index} src={`assets/logos/${platform}.png`} />   
          )
        )}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({src}) => (
    <img src={src} className="duration-200 rounded-sm hover-scale-110" />
)

