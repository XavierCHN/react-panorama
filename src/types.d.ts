declare const process: {
  env: {
    NODE_ENV: 'production' | 'development';
    BUILD_ENV: 'production' | 'development';
  };
};

declare interface CustomUIConfig {
  temporaryScheduleHandle: ScheduleID;
}

declare interface PanoramaPanelNameMap {
  TabButton: Panel,
  TabContents: Panel,
  DOTAParticleScenePanel: ScenePanel,
}
declare interface HeroImage extends ImagePanel {
  persona: string;
}