/* eslint-disable @typescript-eslint/no-empty-interface */
import { ClassAttributes, ReactNode } from 'react';

type EventHandler<T extends PanelBase> = (panel: T) => void;
export interface PanelAttributes<T extends PanelBase = Panel> extends ClassAttributes<T> {
  children?: ReactNode;
  dialogVariables?: Record<string, string | number | Date>;

  id?: string;
  className?: string;
  style?: Partial<VCSSStyleDeclaration>;
  hittest?: boolean;
  hittestchildren?: boolean;
  acceptsfocus?: boolean;
  tabindex?: number | 'auto';
  inputnamespace?: string;
  draggable?: boolean;
  enabled?: boolean;
  visible?: boolean;
  useglobalcontext?: boolean;
  disallowedstyleflags?: string;
  'never-cache-composition-layer'?: boolean;
  'always-cache-composition-layer'?: boolean;
  'require-composition-layer'?: boolean;
  registerforreadyevents?: boolean;
  readyfordisplay?: boolean;
  clipaftertransform?: boolean;
  rememberchildfocus?: boolean;
  keepscrolltobottom?: boolean;
  sendchildscrolledintoviewevents?: boolean;
  'overscroll-x'?: number;
  'overscroll-y'?: number;
  scrollparenttofitwhenfocused?: boolean;
  acceptsinput?: boolean;
  analogstickscroll?: boolean;
  childfocusonhover?: boolean;
  focusonhover?: boolean;
  mousecanactivate?: 'unfocused' | 'iffocused' | 'ifparentfocused(<parentid>)' | string;
  defaultfocus?: string;
  selectionposboundary?: 'both' | 'vertical' | 'horizontal' | string;
  // TODO: sectionpos?: 'auto';?

  onpanelevent?: EventHandler<T>;
  onload?: EventHandler<T>;
  onfocus?: EventHandler<T>;
  onactivate?: EventHandler<T>;
  onmouseactivate?: EventHandler<T>;
  ondblclick?: EventHandler<T>;
  oncontextmenu?: EventHandler<T>;
  onmouseover?: EventHandler<T>;
  onmouseout?: EventHandler<T>;
  onmovedown?: EventHandler<T>;
  onmoveleft?: EventHandler<T>;
  onmoveright?: EventHandler<T>;
  onmoveup?: EventHandler<T>;
  oncancel?: EventHandler<T>;
  ontabforward?: EventHandler<T>;
  ondescendantfocus?: EventHandler<T>;
  onblur?: EventHandler<T>;
  ondescendantblur?: EventHandler<T>;
  ontabbackward?: EventHandler<T>;
  onscrolledtobottom?: EventHandler<T>;
  onscrolledtorightedge?: EventHandler<T>;
  onselect?: EventHandler<T>;
  ondeselect?: EventHandler<T>;
}

interface LabelLikeAttributes<T extends Panel> extends PanelAttributes<T> {
  /**
   * Note: Using this attribute is the same as assigning `text` property on a Label panel - it does
   * not localize strings and ignores dialog variables. If you need the behavior of XML attribute,
   * use `localizedText` instead.
   */
  text?: string | number | ((panel: LabelPanel) => string);
  localizedText?: string;
}

export interface LabelAttributes extends LabelLikeAttributes<LabelPanel> {
  unlocalized?: boolean;
  imgscaling?: number;
  allowtextselection?: boolean;
  html?: boolean;
}

export interface ImageAttributes<T extends ImagePanel = ImagePanel> extends PanelAttributes<T> {
  svgfillrule?: 'nonzero' | 'evenodd';
  svgopacity?: number;
  svgstrokeopacity?: number;
  svgstrokelinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
  svgstrokelinecap?: 'butt' | 'round' | 'square';
  svgstrokewidth?: number;
  svgstroke?: '#ffffff' | string;
  svgfillopacity?: number;
  svgfill?: '#ffffff' | string;
  /**
   * texturewidth and textureheight can be used to override the size of vector graphics. Default value of -1 indicates texture width/height to be determined from source file
   */
  texturewidth?: number;
  /**
   * texturewidth and textureheight can be used to override the size of vector graphics. Default value of -1 indicates texture width/height to be determined from source file
   */
  textureheight?: number;
  srcset?: string;
  animate?: string;
  defaultsrc?: string;
  src?: string;
  verticalalign?: 'top' | 'bottom' | 'center' | 'middle';
  horizontalalign?: 'left' | 'right' | 'center' | 'middle';
  scaling?: ScalingFunction;
}

export interface DOTAAbilityImageAttributes extends ImageAttributes<AbilityImage> {
  abilityname?: string;
  abilityid?: number;
  contextEntityIndex?: AbilityEntityIndex;
  /** @default false */
  showtooltip?: boolean;
}

export interface DOTAItemImageAttributes extends ImageAttributes<ItemImage> {
  itemname?: string;
  contextEntityIndex?: ItemEntityIndex;
  /** @default true */
  showtooltip?: boolean;
}

export interface DOTAHeroImageAttributes extends ImageAttributes<HeroImage> {
  heroname?: string;
  heroid?: HeroID;
  heroimagestyle?: 'icon' | 'portrait' | 'landscape';
  persona?: string;
  usedefaultimage?: boolean;
  defaultimage?: string;
}

export interface DOTALeagueImageAttributes extends ImageAttributes<LeagueImage> {
  leagueid?: number;
  /** @default 'Banner' */
  leagueimagestyle?: 'Banner' | 'Square' | 'LargeIcon';
}

export interface EconItemImageAttributes extends ImageAttributes {
  itemdef: number;
  itemstyle?: number;
}

export interface AnimatedImageStripAttributes extends ImageAttributes {
  framewidth?: number;
  frameheight?: number;
  frametime?: string;
  defaultframe?: number;
  animating?: boolean;
}

export interface DOTAEmoticonAttributes extends AnimatedImageStripAttributes {
  emoticonid?: number;
  alias?: string;
}

export type MovieAutoPlay = 'off' | 'onload' | 'onfocus';

export interface MovieAttributes extends PanelAttributes<MoviePanel> {
  src?: string;
  volume?: number;
  muted?: boolean;
  repeat?: boolean;
  notreadybehavior?: boolean;
  loadbehavior?: boolean;
  /** @default 'onload' */
  autoplay?: MovieAutoPlay;
  title?: string;
  controls?: Parameters<MoviePanel['SetControls']>[0];
}

export interface DOTAHeroMovieAttributes extends PanelAttributes<HeroMovie> {
  src?: string;
  volume?: number;
  muted?: boolean;
  repeat?: boolean;
  notreadybehavior?: boolean;
  loadbehavior?: boolean;
  /** @default 'off' */
  autoplay?: MovieAutoPlay;

  heroid?: HeroID;
  heroname?: string;
  persona?: string;
}

export interface RenderPanelAttributes extends PanelAttributes {}

export interface DOTAScenePanelAttributes extends PanelAttributes<ScenePanel> {
  'post-process-fade'?: number;
  'post-process-material'?: string;
  'animate-during-pause'?: boolean;
  'pin-fov'?: 'horizontal' | 'vertical';
  'live-mode'?: 'high_end_only' | string;
  'no-intro-effects'?: boolean;
  environment?: 'default' | 'full_body' | 'full_body_right_side' | 'card';
  'activity-modifier'?: string;
  unit?: string;

  map?: string;
  camera?: string;
  light?: string;

  pitchmin?: number;
  pitchmax?: number;
  yawmin?: number;
  yawmax?: number;
  acceleration?: number;
  autorotatespeed?: number;
  allowrotation?: boolean;
  rotateonhover?: boolean;
  rotateonmousemove?: boolean;

  antialias?: boolean;
  deferredalpha?: boolean;
  drawbackground?: boolean;
  panoramasurfaceheight?: number;
  panoramasurfacewidth?: number;
  panoramasurfacexml?: string;
  particleonly?: boolean;
  renderdeferred?: boolean;
  rendershadows?: boolean;
  renderwaterreflections?: boolean;
  allowsuspendrepaint?: boolean;
}

export interface DOTAParticleScenePanelAttributes extends DOTAScenePanelAttributes {
  syncSpawn?: boolean;
  fov?: number;
  startActive?: boolean;
  squarePixels?: boolean;
  farPlane?: number;
  lookAt?: [number, number, number] | string;
  cameraOrigin?: [number, number, number] | string;
  useMapCamera?: boolean;
  particleName?: string;
}

export interface DOTAEconItemAttributes extends PanelAttributes<EconItemPanel> {
  itemdef: number;
  itemstyle?: number;
}

export interface ProgressBarAttributes extends PanelAttributes<ProgressBar> {
  value?: number;
  min?: number;
  max?: number;
}

export interface CircularProgressBarAttributes extends PanelAttributes<CircularProgressBar> {
  value?: number;
  min?: number;
  max?: number;
}

export interface ProgressBarWithMiddleAttributes extends PanelAttributes<ProgressBarWithMiddle> {
  lowervalue?: number;
  uppervalue?: number;
  min?: number;
  max?: number;
}

export interface DOTAUserNameAttributes extends PanelAttributes<UserName> {
  steamid?: string | 'local';
}

export interface DOTAUserRichPresenceAttributes extends PanelAttributes<UserRichPresence> {
  steamid?: string | 'local';
}

export interface DOTAAvatarImageAttributes extends PanelAttributes<AvatarImage> {
  steamid?: string | 'local';
  nocompendiumborder?: boolean;
  lazy?: boolean;
}

export interface CountdownAttributes extends PanelAttributes<CountdownPanel> {
  startTime?: number;
  endTime: number;
  /** @default 1 */
  updateInterval?: number;
  /** @default 'countdown_time' */
  timeDialogVariable?: string;
}

export interface TextButtonAttributes extends LabelLikeAttributes<TextButton> {
  unlocalized?: boolean;
  html?: boolean;
}

export interface ToggleButtonAttributes extends LabelLikeAttributes<ToggleButton> {
  selected?: boolean; // checked?
  unlocalized?: boolean;
  html?: boolean;
}

export interface RadioButtonAttributes extends PanelAttributes<RadioButton> {
  global?: boolean;
  group?: string;
  text?: string;
  html?: boolean;

  selected?: boolean;
}

export interface TextEntryAttributes extends PanelAttributes<TextEntry> {
  autocompleteposition?: 'top' | string;
  multiline?: boolean;
  placeholder?: string;
  maxchars?: number;
  textmode?: 'normal' | 'password' | 'numeric' | 'numericpassword';
  capslockwarn?: 1 | 0;
  undohistory?: 'enabled';

  text?: string;
  ontextentrychange?: EventHandler<TextEntry>;
  oninputsubmit?: EventHandler<TextEntry>;
  // ontextentrysubmit doesn't seem to be ever triggered
}

export interface NumberEntryAttributes extends PanelAttributes<NumberEntry> {
  value?: number;
  onvaluechanged?: EventHandler<NumberEntry>;
  /** @default 0 */
  min?: number;
  /** @default 1000000 */
  max?: number;
  /** @default 1 */
  increment?: number;
}

export interface SliderAttributes<T extends SliderPanel = SliderPanel> extends PanelAttributes<T> {
  style?: never;

  value?: number;
  onvaluechanged?: EventHandler<T>;

  /** @default 0 */
  min?: number;

  /** @default 1 */
  max?: number;

  /**
   * Note: to make slider horizontal it also should have a `HorizontalSlider` class.
   *
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';
}

export interface SlottedSliderAttributes<T extends SlottedSlider = SlottedSlider>
  extends SliderAttributes<T> {
  notches?: number;
}

export interface DropDownAttributes extends PanelAttributes<DropDown> {
  selected?: string;
  oninputsubmit?: EventHandler<DropDown>;
}

// Untested
export interface CarouselAttributes extends PanelAttributes<CarouselPanel> {
  focus?: 'center' | 'edge';
  'focus-offset'?: string;
  wrap?: boolean;
  'panels-visible'?: number;
  AllowOversized?: any;
  'autoscroll-delay'?: string;
  'x-offset'?: string;
}

export interface CarouselNavAttributes extends PanelAttributes {
  carouselid?: string;
}

export interface DOTAHUDOverlayMapAttributes extends PanelAttributes<HUDOverlayMap> {
  maptexture?: string;
  /** @default 4 */
  mapscale?: number;
  /** @default true */
  mapscroll?: boolean;
  /** @default false */
  fixedoffsetenabled?: boolean;
  fixedOffset?: { x: number; y: number };
  fixedBackgroundTexturePosition?: { size: number; x: number; y: number };
}

export interface HTMLAttributes extends PanelAttributes<HTML> {
  url?: string;
  // SetIgnoreCursor doesn't seem to do anything
}

export interface TabButtonAttributes extends PanelAttributes {
  group?: string;
  localizedText?: string;
  html?: boolean;

  selected?: boolean;
  onselect?: EventHandler<Panel>;
  ondeselect?: EventHandler<Panel>;
}

export interface TabContentsAttributes extends PanelAttributes {
  tabid?: string;
  group?: string;

  selected?: boolean;
  onselect?: EventHandler<Panel>;
  ondeselect?: EventHandler<Panel>;
}

export interface CustomLayoutPanelAttributes extends PanelAttributes {
  layout: string;
}

export interface GenericPanelAttributes extends PanelAttributes {
  type: string;
  [key: string]: any;
}
