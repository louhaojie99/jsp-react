import BlogHome from '../views/blog/Home';
import Video from '../views/video/Index';
import WorkPlace from '../views/workplace/Index';

const routeConfigData = [
	{ path: '/', title: '博客首页', exact: true, component: BlogHome },
	{ path: '/video', title: '视频教程', exact: false, component: Video },
	{ path: '/workplace', title: '职场技能', exact: false, component: WorkPlace },
];

export { routeConfigData };
