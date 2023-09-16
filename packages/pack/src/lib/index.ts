// assets
export { default as twMerge, getTwConfig } from './assets/tailwindcss/tailwind-merge.js';

// components
export { default as Contacts } from './components/contacts/Contacts.svelte';

export { default as Footer } from './components/footer/Footer.svelte';

export { default as IconifyAdmin } from './components/iconify-admin/IconifyAdmin.svelte';

export { default as SvelteKitCounter } from './components/svelte-kit-counter/SvelteKitCounter.svelte';

// shared
export { default as Link } from './shared/link/Link.svelte';

export { default as NavHome } from './shared/navigate/NavHome.svelte';
export { default as NavPath } from './shared/navigate/NavPath.svelte';
export { default as NavToTop } from './shared/navigate/NavToTop.svelte';

export { default as Select } from './shared/select/Select.svelte';

// ui
export { default as Async } from './ui/async/Async.svelte';

export { default as Carousel } from './ui/carousel/Carousel.svelte';
export { default as CarouselKit } from './ui/carousel/CarouselKit.svelte';

export { default as ColorTheme } from './ui/color-theme/ColorTheme.svelte';

export { default as Dropdown } from './ui/dropdown/Dropdown.svelte';
export { default as DropdownWrapper } from './ui/dropdown/DropdownWrapper.svelte';

export { default as Gallery } from './ui/gallery/Gallery.svelte';
export { default as GalleryKit } from './ui/gallery/GalleryKit.svelte';

export { default as Lightbox } from './ui/lightbox/Lightbox.svelte';
export { default as LightboxKit } from './ui/lightbox/LightboxKit.svelte';
export { default as LightboxList } from './ui/lightbox/LightboxList.svelte';
export { default as LightboxModal } from './ui/lightbox/LightboxModal.svelte';
export { default as LightboxThumbnail } from './ui/lightbox/LightboxThumbnail.svelte';

export { default as Navbar } from './ui/navbar/Navbar.svelte';
export { default as NavbarKit } from './ui/navbar/NavbarKit.svelte';
export { default as NavbarMenu } from './ui/navbar/NavbarMenu.svelte';
export { default as NavbarWrapper } from './ui/navbar/NavbarWrapper.svelte';

export { default as Sign } from './ui/sign/Sign.svelte';

export { default as BagePlaceholder } from './ui/skeleton/BagePlaceholder.svelte';
export { default as CardPlaceholder } from './ui/skeleton/CardPlaceholder.svelte';
export { default as ImagePlaceholder } from './ui/skeleton/ImagePlaceholder.svelte';
export { default as ListPlaceholder } from './ui/skeleton/ListPlaceholder.svelte';
export { default as Skeleton } from './ui/skeleton/Skeleton.svelte';
export { default as TestimonialPlaceholder } from './ui/skeleton/TestimonialPlaceholder.svelte';
export { default as TextPlaceholder } from './ui/skeleton/TextPlaceholder.svelte';
export { default as VideoPlaceholder } from './ui/skeleton/VideoPlaceholder.svelte';
export { default as WidgetPlaceholder } from './ui/skeleton/WidgetPlaceholder.svelte';

export { default as Spinner } from './ui/spinner/Spinner.svelte';

export { default as Toast } from './ui/toast/Toast.svelte';
export { default as ToastData } from './ui/toast/ToastData.svelte';

export { default as YandexSearchForm } from './ui/yandex/search/YandexSearchForm.svelte';
export { default as YandexSearchSerp } from './ui/yandex/search/YandexSearchSerp.svelte';
export { default as YandexSearchToggle } from './ui/yandex/search/YandexSearchToggle.svelte';

// svelte-core
export {
  AppHead,
  Figure,
  Nav,
  RouteTransition,
  ScreenBlock,
  lazyload,
  outside,
  placeholder,
  scroll,
  audio
} from '@daks.dev/svelte.kit';
export type { LazyLoad, NavBrand, NavItem, NavSite } from '@daks.dev/svelte.kit';

// svelte-iconify
export { Icon, IconTest, isIcon } from '@daks.dev/svelte-iconify';

// svelte-yandex
export { YandexMap, YandexMetrikaHit, YandexMetrikaInit } from '@daks.dev/svelte-yandex';
export type { YandexMapInstance } from '@daks.dev/svelte-yandex';

// vite-imagetools
export {
  globDataset,
  globIndex,
  globInfoset,
  imageExtnames,
  imagePattern
} from '@daks.dev/vite-imagetools';
