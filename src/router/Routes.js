import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Empty from '../page/Empty';
import MiniCode from '../page/MiniCode';
import DownloadApp from '../page/DownloadApp';

const CreditCardIndex = lazy(() => import('../page/CreditCard/Index'));
const CreditCardDetail = lazy(() => import('../page/CreditCard/Detail'));
const OneYuan = lazy(() => import('../page/OneYuan/Index'));
const IndexShare = lazy(() => import('../page/OneYuan/IndexShare'));
const ShopownerRights = lazy(() => import('../page/ShopownerRights/Index'));
const StoreIntroduce = lazy(() => import('../page/StoreIntroduce/Index'));
const ShopkeeperRise = lazy(() => import('../page/ShopkeeperRise/Index'));
const AlipayRule = lazy(() => import('../page/Alipay/Rule'));
const AlipayShare = lazy(() => import('../page/Alipay/Index'));
const AlipayShareStep = lazy(() => import('../page/Alipay/AlipayShareStep'));
// const CityRise = lazy(() => import('../page/ServiceRise/CityRise'));
// const OwnerRise = lazy(() => import('../page/ServiceRise/OwnerRise'));
const CityRise = lazy(() => import('../page/ServiceRise/CityOperation'));
const OwnerRise = lazy(() => import('../page/ServiceRise/DistrictOperation'));
const DistrictOperation = lazy(() => import('../page/ServiceRise/DistrictOperation'));
const ServiceProvider = lazy(() => import('../page/ServiceRise/ServiceProvider'));
const CityOperation = lazy(() => import('../page/ServiceRise/CityOperation'));

const ShanZhen = lazy(() => import('../page/ShanZhen/Index'));
const ShanZhenStep = lazy(() => import('../page/ShanZhen/Step'));
const ShopManage = lazy(() => import('../page/ShopManage/Index'));
const CastForm = lazy(() => import('../page/CastForm/Index'));
const CityAlliance = lazy(() => import('../page/CityAlliance/Index'));
const NewPeople = lazy(() => import('../page/NewPeople/Index'));
const NewPeopleShare = lazy(() => import('../page/NewPeople/Share'));
const RedEnvelopes = lazy(() => import('../page/RedEnvelopes/Index'));
const VideoList = lazy(() => import('../page/VideoList/Index'));
const QuestionList = lazy(() => import('../page/Question/Index'));
const QuestionDetail = lazy(() => import('../page/Question/Detail'));
const Lottery = lazy(() => import('../page/Lottery/Index'));
const SignIn = lazy(() => import('../page/SignIn/Index'));
const LotteryDetail = lazy(() => import('../page/Lottery/LotteryDetail'));
const LotteryRule = lazy(() => import('../page/Lottery/Rule'));
const SignInRule = lazy(() => import('../page/SignIn/SignInRule'));
const SignInDetail = lazy(() => import('../page/SignIn/SignInDetail'));
const LaunchApp = lazy(() => import('../page/LaunchApp'));
const SaveMoneyStrategy = lazy(() => import('../page/SaveMoneyStrategy/Index'));
const mainPlace = lazy(() => import('../page/mainPlace/Index'));
const NewPeopleNoEvent = lazy(() => import('../page/NewPeople/noEvent'));
const MiniApp = lazy(() => import('../page/MiniApp/index'));
const TbDetail = lazy(() => import('../page/TbDetail/Index'));
const OilIndex = lazy(() => import('../page/Oil/Index'));
const OilDetail = lazy(() => import('../page/Oil/Detail'));
const OilOrderDetail = lazy(() => import('../page/Oil/OrderDetail'));
const Element = lazy(() => import('../page/Element/Index'));
const JstAbout = lazy(() => import('../page/JstAbout/Index'));

const Root = () => (
  <App>
    <Suspense fallback={<div />}>
      <Switch>
        {/* 信用卡 */}
        <Route path="/creditCard" component={CreditCardIndex} />
        <Route path="/creditCardDetail" component={CreditCardDetail} />
        {/* 1元购 */}
        <Route path="/oneYuan/:tabIndex?" component={OneYuan} />
        <Route path="/oneYuanShare/:tabIndex" component={IndexShare} />
        {/* 店长权益 */}
        <Route path="/shopownerRights" component={ShopownerRights} />
        {/* 门店介绍 */}
        <Route path="/storeIntroduce" component={StoreIntroduce} />
        {/* 店长直升 */}
        <Route path="/shopkeeperRise/:type?" component={ShopkeeperRise} />
        {/* 支付宝拉新 */}
        <Route path="/alipayRule" component={AlipayRule} />
        <Route path="/alipayShare" component={AlipayShare} />
        <Route path="/alipayShareStep" component={AlipayShareStep} />
        {/* 服务商直升 */}
        <Route path="/cityRise" component={CityRise} />
        <Route path="/ownerRise" component={OwnerRise} />
        <Route path="/districtOperation" component={DistrictOperation} />
        <Route path="/serviceProvider" component={ServiceProvider} />
        <Route path="/cityOperation" component={CityOperation} />
        {/* 善诊 */}
        <Route path="/shanZhen" component={ShanZhen} />
        <Route path="/shanZhenStep" component={ShanZhenStep} />
        {/* 店铺管理 */}
        <Route path="/shopManage" component={ShopManage} />
        {/* 渠道投放 */}
        <Route path="/castForm" component={CastForm} />
        {/* 城市联盟申请 */}
        <Route path="/cityAlliance" component={CityAlliance} />
        {/* 新人专区 */}
        <Route path="/newPeople" component={NewPeople} />
        <Route path="/newPeopleShare" component={NewPeopleShare} />
        <Route path="/newPeopleNoEvent" component={NewPeopleNoEvent} />
        {/* 红包 */}
        <Route path="/redEnvelopes" component={RedEnvelopes} />
        {/* 视频列表 */}
        <Route path="/videoList/:id" component={VideoList} />
        {/* 常见问题 */}
        <Route path="/questionList" component={QuestionList} />
        <Route path="/questionDetail/:listIndex/:itemIndex/:version" component={QuestionDetail} />
        {/* 抽奖 */}
        <Route path="/lottery" component={Lottery} />
        {/* 抽奖详情 */}
        <Route path="/lotteryDetail" component={LotteryDetail} />
        <Route path="/lotteryRule" component={LotteryRule} />
        {/* 签到 */}
        <Route path="/signIn" component={SignIn} />
        <Route path="/signInRule" component={SignInRule} />
        <Route path="/signInDetail" component={SignInDetail} />
        <Route path="/LaunchApp" component={LaunchApp} />
        {/* 省钱攻略 */}
        <Route path="/saveMoneyStrategy" component={SaveMoneyStrategy} />
        <Route path="/double11MainPlace" component={mainPlace} />
        <Route path="/miniapptransfer" component={MiniApp} />
        <Route path="/tbProDetail/:pid/:shareId" component={TbDetail} />
        {/* 加油站 */}
        <Route path="/oilIndex" component={OilIndex} />
        <Route path="/oilDetail/:gasId/:location/:oilNo" component={OilDetail} />
        <Route path="/oilOrderDetail/:orderId" component={OilOrderDetail} />
        {/* 饿了么 */}
        <Route path="/element" component={Element} />

        <Route path="/minicode" component={MiniCode} />
        {/* 将商堂关于我们 */}
        <Route path="/jstAbout" component={JstAbout} />

        {/* 推荐下载app */}
        <Route path="/downloadApp" component={DownloadApp} />

        {/* 404 */}
        <Route path="/empty" component={Empty} />

        {/* 路由不正确时，默认跳回的页面 */}
        <Route render={() => <Redirect to="empty" />} />
      </Switch>
    </Suspense>
  </App>
);

export default Root;
