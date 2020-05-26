import React, { Component } from 'react';

const styles = {
  container: {
    padding: '10px',
    textAlign: 'left',
  },
};
export default class Agreement extends Component {
  render() {
    const content =
      '<p class="p1">\n' +
      '    <span class="s1"><strong>甲乙双方本着利益共享、风险共担的原则，由缔约双方在自愿、平等、公平及诚实信用原则的基础上，根据《中华人民共和国合同法》等相关法律、法规的规定，经友好协商缔结本协议并承诺遵守协议中各项条款。</strong></span>\n' +
      '</p>\n' +
      '<p class="p2">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s2">一．定义</span>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s3">1. </span><span class="s2">米粒生活平台：指由杭州湘靖网络科技有限公司提供技术支持和服务的电子商务平台网站。</span>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s3">2. </span><span class="s2">米粒生活</span><span class="s3"> APP</span><span class="s2">：指甲方基于米粒生活平台旨在为商家提供的移动互联网信息服务以及技术支持服务，米粒生活</span><span class="s3">APP</span><span class="s2">仅作为米粒生活平台与商家及买家交易的平台媒介。</span>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s3">3. </span><span class="s2">商家及商家入驻：商家必须是符合本协议第</span><span class="s3"> <span class="Apple-converted-space">&nbsp; </span></span><span class="s2">条规定的法律实体，如无经营资格或违反本协议第</span><span class="s3"><span class="Apple-converted-space">&nbsp; </span></span><span class="s2">条之声明与保证的组织不当入驻为米粒生活平台商家或超越其民事权利或行为能力范围从事交易的，其与米粒生活平台之间的协议自始无效，米粒生活平台一经发现，有权立即注销该商家账户，并追究其使用米粒生活平台服务的一切法律责任。</span>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s3">4. </span><span class="s2">米粒生活平台商家账户：即商家完成入驻流程而获得的其将在使用服务的过程中必须与自设的账户密码共同使用的用户名。商家应妥善保管其商家账户及密码信息，商家不得以任何形式擅自转让或授权他人使用自己的商家账户。</span>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s3">5. </span><span class="s2">其他服务：包括但不限于市场调研、商业推广、广告服务等，由协议双方在补充协议中确定。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">米粒生活平台保留在任何时候自行决定对服务及其相关功能、应用软件变更、升级的权利。米粒生活平台进一步保留在服务中开发新的模块、功能和软件或其他语种服务的权利。上述所有新的模块、功能、软件服务的提供，除非米粒生活平台另有说明，否则仍适用本协议。服务随时可能因米粒生活平台单方面判断而被增加或修改，或因定期、不定期的维护而暂缓提供，商家将会得到相应的变更通知。商家在此同意米粒生活平台在任何情况下都无需向其或第三方在使用服务时对其在传输或联络上的迟延、不准确、错误或疏漏及因此而致使的损害负责。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">商家在享受米粒生活平台提供的各项服务时，承诺接受并遵守平台各项相关规则的规定。米粒生活平台有权根据需要制定、修改本协议，如本协议有任何变更，米粒生活平台将在网站上以公示形式通知商家。如商家不同意相关变更，必须立即以书面方式通知米粒生活平台终止本协议。任何修订和新规则一经在米粒生活平台公布即自动生效，成为本协议的一部分。登录或继续使用服务将表示商家接受修订的协议。除另行明确声明外，任何服务范围扩大或功能增强的新内容均受本协议约束。</span>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s2">二．合作方式</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">商家可通过米粒生活平台上或米粒生活</span><span class="s3">APP</span><span class="s2">发布与商品或服务有关的基本信息、优惠信息等内容。买家与商家交易时，买家可通过米粒生活平台上或米粒生活</span><span class="s3">APP</span><span class="s2">获取上述信息。商家可通过米粒生活平台提供的管理功能对信息和交易进行操作。</span>\n' +
      '</p>\n' +
      '<p class="p2">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s2">三．商家店铺资质入驻管理规范</span>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    1.<span class="s1">总则</span><span class="s2"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s3">1.1. </span><span class="s2">为了建立良好的经营秩序，加强米粒生活平台的入驻店铺管理和商品质量管控，提升买家的购物体验，保障买家合法权益，根据平台规则制定本规范。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s3">1.2. </span><span class="s2">本规范适用于米粒生活平台所有入驻店铺。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s3">1.3. </span><span class="s2">商家在米粒生活平台开设店铺，应当具备法律法规规定的以及甲方要求的资质和权利，包括但不限于主体资质、行业资质、品牌资质等。商家应当在入驻时以及店铺经营期间，根据其店铺类型、主营类目、销售的具体商品等，按照米粒生活平台的要求提交相应的资质证明文件。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s3">1.4. </span><span class="s2">米粒生活平台可能根据需要随时变更（包括但不限于制定、修订、废止）店铺资质要求，并于实施前</span><span class="s3">7</span><span class="s2">日在平台公示，公示形式包括但不限于网站公告、系统页面提示等，商家应及时根据上述变更补充或更新相应</span><span class="s3"> </span><span class="s2">的资质证明文件。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p7">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.</span><span class="s2">商家义务：</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.1.</span><span class="s2">其承诺所提交的资质证明文件符合下列要求：</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.1.1.</span><span class="s2">真实性：商家应确保所提交的资质证明文件真实，不存在伪造、变造等情况。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.1.2. </span><span class="s2">完整性：商家应根据店铺实际情况，提交米粒生活平台要求的全部资质证明文件，并确保该等文件内容完整，例如，注册商标如有变更证明、续展注册证明、转让证明等，应与商标注册证一并提交。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.1.3. </span><span class="s2">有效性：商家应确保所提交的资质证明文件合法有效，并在店铺经营期间保持资质证明文件持续有效。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.2. </span><span class="s2">其承诺若提交的资质证明文件系由第三方提供的，自行核实该等证明文件的真实性、完整性及有效性后再向米粒生活平台提交，并就该等证明文件承担全部责任。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.3. </span><span class="s2">其承诺店铺经营期间，如有资质证明文件即将过期的，在文件过期前及时予以更新。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.4. </span><span class="s2">其承诺若因其提供的相关证明文件不真实、不准确或超过时效等原因发生纠纷或被相关国家主管机关处罚的，商家应当独立承担全部责任，若给米粒生活平台造成损失的，其同意赔偿全部损失。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.5. </span><span class="s2">米粒生活平台有权根据管理需要随时对店铺资质进行常规复检或特别复检。若米粒生活平台在复</span><span class="s3"> </span><span class="s2">检中发现店铺资质不合格或资质证明文件不符合要求的，其承诺在米粒生活平台指定的期限内按甲方要求</span><span class="s3"> </span><span class="s2">补充或更新相应的资质证明文件。商家逾期未补充或更新资质证明文件，或者补充、更新的资质证明文件仍不符合要求的，则视为资质不合格，米粒生活平台将按照协议、本规范及平台其他相关规则之规定进行处理。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.6. </span><span class="s2">其承诺不侵害任何第三方的合法权益，包括但不限于第三方的知识产权、物权、肖像权等。其在米粒生活平台所发布的包括但不限于商标、字号、图片、</span><span class="s3">logo</span><span class="s2">、商品或服务内容等所有信息，均已获得合法授权，且米粒生活平台亦可合法使用该等信息。如因该等信息侵犯第三方权利，责任由其自行承担，与米粒生活平台无关。若因此造成米粒生活平台损失的，其同意赔偿其全部损失。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.7. </span><span class="s2">其承诺在米粒生活平台出售商品，按照买家实际支付的现金金额为买家开具发票，相关税收应按国家相关规定由商家自行承担。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.8. </span><span class="s2">其承诺不对米粒生活平台上任何数据作商业性利用，包括但不限于在未经米粒生活平台事先书面批准的情况下，以复制、传播或向他方披露等方式使用在米粒生活平台上其他用户展示的任何资料。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.9. </span><span class="s2">其承诺接受米粒生活平台对其出售商品是否具有合法进货来源的不定期检查，其有义务保留其商品具有合法进货来源的相关凭证。对于无法提供合法进货来源凭证的，米粒生活平台将根据实际情况对商品的真伪作出判断并根据本协议以及米粒生活平台相关规则进行处理，商家对此承担举证不利的后果。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.10. </span><span class="s2">其承诺接受米粒生活平台基于商品品质控制需求对其在售商品进行的质量抽检，检测报告由专业的第三方质检机构出具，其承诺对米粒生活平台选择的第三方质检机构作出的检测结果不持有异议。对于经检测证明存在质量瑕疵的商品，检测费用由商家承担。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"><span class="Apple-converted-space">&nbsp;&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3. </span><span class="s2">米粒生活平台权利</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.1. </span><span class="s2">商家申请入驻米粒生活平台时，若其资质不符合甲方的要求（即资质不合格），米粒生活平台有权选择：</span><span class="s3"> 1</span><span class="s2">）拒绝商家的入驻申请；</span><span class="s3"> 2</span><span class="s2">）退回商家的入驻申请，并要求商家补充资质证明文件或修改店铺类型、主营类目等。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.2. </span><span class="s2">店铺经营期间，如因资质证明文件过期、失效或甲方要求变更等，导致店铺的主体资质或行业资质不合格的，商家应在米粒生活指定的期限内补充或更新相应的资质证明文件，同时，米粒生活</span><span class="s3"> </span><span class="s2">有权在商家补充或更新证明文件前对店铺采取临时限制措施，包括但不限于限制店铺资金提现，商品</span><span class="s3"> </span><span class="s2">移除资源位、禁止上资源位、移除广告、屏蔽、降权、下架、禁售，店铺禁止上新、禁止上架等。商家逾期未补充或更新资质证明文件，或者补充、更新的资质证明文件仍不符合要求的，米粒生活有权关闭店铺，解除甲方协议，终止与该商家的合作。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.3. </span><span class="s2">店铺经营期间，如因资质证明文件过期、失效或甲方要求变更等，导致店铺的品牌资质不合</span><span class="s3"> </span><span class="s2">格的，米粒生活有权变更该店铺类型，并对店铺采取临时限制措施，包括但不限于商品移除资源位、</span><span class="s3"> </span><span class="s2">禁止上资源位、移除广告、屏蔽、降权、下架、禁售，店铺禁止上新、禁止上架等，商家应在甲方指</span><span class="s3"> </span><span class="s2">定的期限内修改店铺信息，包括但不限于店铺名称、店铺简介等。商家逾期不修改店铺信息的，米粒生活有权选择：</span><span class="s3"> 1</span><span class="s2">）强制修改店铺信息并恢复该店铺正常经营；</span><span class="s3"> 2</span><span class="s2">）关闭店铺，解除甲方协议，终止与该商家的合作。</span><span class="s3"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.4. </span><span class="s2">若米粒生活在复检中发现店铺资质不合格或资质证明文件不符合要求的，按照本规范第</span><span class="s3"> 3.2 </span><span class="s2">条、</span><span class="s3">3.3 </span><span class="s2">条之规定处理。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.5. </span><span class="s2">对于商家在米粒生活平台发布的下列各类信息，米粒生活平台有权在不通知商家的前提下进行删除或采取其他限制性措施，包括但不限于以规避费用为目的的信息；米粒生活平台有理由相信存在欺诈等恶意或虚假内容的信息；米粒生活平台有理由相信与平台内交易无关或不是以交易为目的的信息；米粒生活平台有理由相信存在恶意竞价或其他试图扰乱正常交易秩序因素的信息；米粒生活平台有理由相信属于违反公共利益或可能严重损害平台或其他用户合法利益的信息。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.6. </span><span class="s2">米粒生活平台有权根据业务调整情况将本协议项下的全部权利义务一并转移给其关联公司，此种情况将会提前</span><span class="s3">30</span><span class="s2">日以平台公告的形式通知商家。商家承诺对此不持有异议。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">四．争议处理规则总则</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">1. </span><span class="s1">概述</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.1. </span><span class="s2">为规范争议调解工作，及时解决交易环节争议，保护米粒生活平台交易双方当事人的合法权益，依据相关条例制定本规则。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.2. </span><span class="s2">买卖双方在米粒生活平台上交易发生合同争议，适用本规则规定。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.3. </span><span class="s2">买家向商家发起维权或任一方直接向甲方投诉，甲方将根据本规则的规定对买卖双方的争议做出处理。部分买卖双方的争议，买家有权选择或甲方视争议内容交由甲方客服进行判断，甲方将根据普通人的认知水准及日常经验依据等证据作出纠纷责任的归属认定及纠纷调处的结论。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.4. </span><span class="s2">甲方通过站内信、电子邮件、微信或电话等方式向买卖双方发送的与争议处理相关的提示或通知，构成争议处理依据及结论的有效组成部分。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">2.</span><span class="s1">定义</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.1. </span><span class="s2">退货退款，是指在商家签收买家退货后，交易款项支付给买家。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.2. </span><span class="s2">部分退款，是指交易款项部分支付给买家，余款打款给商家。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.3. </span><span class="s2">退款，是指交易款项支付给买家，商品由商家自行和买家协商处理。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.4. </span><span class="s2">打款，是指交易款项支付给商家。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.5. </span><span class="s2">破损，是指商品的一般性损伤，经简单修复后仍可恢复全部使用功能或不影响核心功能的使用。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.6. </span><span class="s2">损毁，是指商品严重受损，无法予以修复或修复后其核心功能已不具有使用价值。修复成本接近商品价值的，亦视为损毁。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.7. </span><span class="s2">交易成功，是指订单状态显示</span><span class="s3">“</span><span class="s2">已完成</span><span class="s3">”</span><span class="s2">。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.8. </span><span class="s2">质量问题，是指商家所出售的商品存在违反产品质量法等相关法律法规或甲方品质类相关规则要求的情形。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.9. </span><span class="s2">表面不一致，是指凭肉眼即可判断交易商品存在破损、少件、空包等情形。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.10. </span><span class="s2">描述不当，是指实物商品或服务，或经甲方官方抽检、排查到的商品存在与商家描述不相符，或商家未对商品瑕疵等信息进行披露等情形，妨害买家权益的行为。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.11. </span><span class="s2">假冒商品，是指假冒注册商标的商品或盗版商品。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.12. </span><span class="s2">承运人，是指负责商品运输的快递或物流一方。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.13. </span><span class="s2">三包，是指商家依照国家或浙江省颁布的相关法律法规，或甲方公示的相关规则履行商品修理、更换、退货的责任与义务。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.14. </span><span class="s2">甲方规则，是指《米粒生活平台商家合作协议》、《米粒生活平台发货规则》等各项规则。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.15. </span><span class="s2">本规则未有特别列明的，参照甲方规则中的相关定义。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.</span><span class="s2">争议受理期限</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.1. </span><span class="s2">买家应当在甲方规定的时限内在线发起维权主张。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.2. </span><span class="s2">被行政机关认定的假冒商品或禁售商品，不受受理期限限制。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.3. </span><span class="s2">买家提供司法机关出具的生效法律文书的，不受受理期限限制。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.4. </span><span class="s2">买家未在甲方规定的时限内在线发起维权主张，但能够提供凭证证实商品存在品质等相关问题的，不受受理期限限制。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.5. </span><span class="s2">商家承诺或双方另行约定售后服务期限的，不受受理期限限制。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.6. </span><span class="s2">本规则或甲方其他规则对受理期限有特别规定的，从其规定。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4. </span><span class="s2">争议受理范围</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.1. </span><span class="s2">甲方受理买卖双方在米粒生活平台上交易产生的争议处理申请，但出现如下情形的争议申请，甲方有权不予受理，买卖任一方有权自行通过司法机关等途径向相对方主张权利：</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">1</span><span class="s2">）买家未在本规则规定的受理期限内发起维权的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">2</span><span class="s2">）交易订单显示的商品或服务与买卖双方约定的实际交易商品或服务不一致，导致交易事实无法查清的，因该实际交易商品或服务产生争议的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">3</span><span class="s2">）买卖双方经自行协商达成退款或退货退款协议并履行完毕，一方或双方反悔产生争议的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">4</span><span class="s2">）买卖双方进行虚假交易或实施套现行为且交易成功的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">5</span><span class="s2">）交易做退款处理后，因商家需要取回商品产生争议的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">6</span><span class="s2">）除甲方规则规定的情形外，买家主张交易引发的额外损失或法定赔偿事宜的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.2. </span><span class="s2">本规则对其他不予受理情形有特别规定的，从其规定。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <span class="s4"><br/></span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <span class="s4">5.</span><span class="s2">争议处理</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.1. </span><span class="s2">通用规则（若甲方相关规则对商家应当承担的责任义务已有特别规定的，则优先适用特别规定。）</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.2. </span><span class="s2">争议过程中，买卖双方应当按照本规则规定的内容进行举证。本规则未有规定或甲方发现双方的交易或一方账号显著异常的，甲方将视双方实际情形作出举证责任分配。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.3. </span><span class="s2">买卖双方应当自行对证据的真实性、关联性、完整性、准确性和及时性负责，甲方将依照普通人的认知水准及日常经验依据该等证据作出纠纷责任的归属认定及纠纷调处的结论。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.4. </span><span class="s2">商家应对出售临近保质期的食品事先予以显著明示或征得买家同意，未予显著明示或征得买家同意的，买家有权拒签或要求退货。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">买家将退货商品交付承运人后，商品的破损、过期风险由商家承担；商品的损毁、灭失风险由买家承担，买家有权向承运人求偿，若商品损毁或灭失时已过期，风险仍由商家承担。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.5. </span><span class="s2">买卖双方就交易的商品或服务存在没有约定或约定不明情形的，双方可以协议补充，无法达成补充协议的，甲方将按照商家商品信息表述条款和</span><span class="s3">/</span><span class="s2">或交易习惯予以确定，若仍无法确定争议责任归属的，交易作退货退款处理。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.6. </span><span class="s2">除双方另有约定或本规则另有说明外，商家同意退货协议但无确切证据证明商家有责的，买家将退货商品交付承运人后，商品的破损、损毁、灭失风险由买家承担，买家有权向承运人求偿。若商家在同意退货协议时附有合理条件的，买家退货应当符合该条件。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.7. </span><span class="s2">买卖双方达成补充协议但一方否认的，主张协议无效的一方应当提供有效证据予以证明，否则应承担相关不利后果。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.8. </span><span class="s2">商家表述的对买家有重大利害关系的格式条款内容应当显著，且不得低于甲方规则的要求，同时不存在免除商家自身应当承担的责任、加重买家责任、排除买家主要权利等内容，否则该条款无效。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.9. </span><span class="s2">商家就特定的违约行为向买家承诺赔付违约金的，当商家发生该违约行为的，应予向买家赔付。若该违约行为的违约金数额与甲方规则规定的数额不一致，则采取就高原则。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.10. </span><span class="s2">甲方应买卖双方对争议调处的需求以及为查明交易事实需要，必要时将向交易涉及的第三方就争议相关问题进行了解核实，并据此作为交易调处结论的参考依据。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.11. </span><span class="s2">买卖双方进行虚假交易或实施套现行为的，在交易未成功前，做退款处理。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.12. </span><span class="s2">商家交付买家的商品存在大量且严重劣质、大量货不对板情形的，经甲方综合判断，有理由认为商家无履行合同之意图的，则视为商家拒绝履约，交易支持退款买家，商品由商家自行和买家协商处置。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.13. </span><span class="s2">商家出售的商品被新闻媒体曝光、国家质监部门等行政管理部门通报，或经甲方抽检或排查确认系描述不当、质量不合格应当召回的，商家需主动并及时发起召回，交易支持退货退款。商家对商品批次提出异议的，应当提供相关证据予以证明。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.14. </span><span class="s2">交易做退货退款处理的，买家将退货商品交付承运人后，商品的破损风险由买家承担，买家退货前若商品性质已不适宜退货，则作退款处理。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">五．发货规范（若甲方相关规则对商家应当承担的责任义务已有特别规定的，则优先适用特别规定。）</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1. </span><span class="s2">发货规范内容</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.1. </span><span class="s2">商家应该在甲方规则规定或与买家约定的发货时间内予以发货。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.2. </span><span class="s2">如果商家未在发货时限内</span><span class="s3">,</span><span class="s2">上传已成团商品订单对应的真实物流单号到后台，该订单被自动标识为延迟发货订单。甲方有权按照</span><span class="s3">3</span><span class="s2">元</span><span class="s3">/</span><span class="s2">单的标准，自商家店铺账户保证金及</span><span class="s3">/</span><span class="s2">或贷款金额中扣除对应的消费者赔偿金，并奖同等金额发放给商家延迟发货订单所对应买家。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.3. </span><span class="s2">商家应当将商品送达至买家订单收货地址并交由收件人本人签收，需买家至指定地点提取的，应当事先快递予以通知。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.4. </span><span class="s2">商家承诺或买卖双方约定采用特定的承运人运送商品的，商家应按照承诺或约定履行。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.5. </span><span class="s2">商家违反发货规范导致买家未收到商品或拒收商品的，由此产生的相关费用及商品损毁或灭失风险，由商家自行承担，交易作退款处理。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.6. </span><span class="s2">商家违反</span><span class="s3">“</span><span class="s2">发货规范</span><span class="s3">”</span><span class="s2">，除本规则另有说明外，支持买家退货退款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.7. </span><span class="s2">商家违反</span><span class="s3">“</span><span class="s2">发货规范</span><span class="s3">”</span><span class="s2">但买家已实际使用商品或点击</span><span class="s3">“</span><span class="s2">确认收货</span><span class="s3">”</span><span class="s2">的，买家以商家违反发货规范为由而主张退货退款的，应当和商家协商一致，否则甲方将不予支持。因商家的不正当行为诱使买家确认收货的情形除外。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">1.8. </span><span class="s5">如库存更新不及时导致超卖引起部分商品无法发货的，商家需先履约有货部分并告知甲方无法在发货时限内完成发货，超卖订单需自买家支付完成之日起，</span><span class="s6">5</span><span class="s5">个工作日内协调货源并完成发货；由于客观原因</span><span class="s6">5</span><span class="s5">个工作日内无法协调货源的，商家需与买家自行协商取消订单；卖家与买家协商未达成一致，未经买家同意取消订单且买家投诉的，甲方则有权将商家商品下架或关闭店铺。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2. </span><span class="s2">商品签收规范</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.1. </span><span class="s2">买家需确保订单中填写的收件信息真实、详细、准确、有效。对收件信息中任一要素需变更的，应当征得商家同意。买家提供的收件信息错误导致未收到商品的，由买家承担该责任限度内的不利后果。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.2. </span><span class="s2">买家要求变更收件信息，商家同意后实际未变更成功，商品仍按变更前的收件信息被签收，买家主张未收到商品的，经甲方判断若变更前和变更后的收件信息和买家无显著关联的，交易支持退款买家，由商家承担商品相应风险。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.3. </span><span class="s2">商家发货或买家退货后，收件人应当亲自签收商品，也可委托他人签收商品或指示承运人将商品置于收件人指定的地点。收件人委托他人签收商品或承运人已按收件人的指示将商品置于指定地点的，视为收件人本人签收。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.4. </span><span class="s2">除本规则另有规定外，收件人应当在承运人交付商品时，就商品表面是否一致进行当场检视。买卖双方另行约定检视期限和（或）检视方式的，从其约定。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.5. </span><span class="s2">买家主张未收到商品或商家主张未收到买家退货的，由相对方承担举证责任，举证无效的，支持退款买家或打款商家。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.6. </span><span class="s2">收件人当场检验，若发现商品表面不一致，可予以拍照并拒签，若交易系商家发货的，则支持退款买家；若交易系买家原因退货的，则支持打款商家，商品相关风险由相对方承担。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">2.7. </span><span class="s2">买家无正当理由拒绝签收不支持七天无理由退货且性质不适宜拒签的商品，商品返回后商家予以拒签的，交易支持打款商家，由买家负责召回商品并承担商品毁损、灭失的风险。若商家已签收商品，商家可选择退款或将商品再次发回买家，发回后商品的破损风险由买家承担，若商品性质已不适宜发回的，则交易支持打款商家。商家发回商品的运费由买家承担。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3. </span><span class="s2">商品退货、换货规范（若甲方相关规则对商家应当承担的责任义务已有特别规定的，则优先适用特别规定。）</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.1. </span><span class="s2">商家应对自行填写的默认退货地址确保正确，交易达成退货协议后，若需要指定退货地址或多地址退货的，应当征得买家同意。否则，买家可选择按甲方系统给出的退货地址进行退货，退货后商品无法送达的风险由商家承担，交易支持退款买家。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.2. </span><span class="s2">买卖双方线下达成退货协议的，买家应当自双方达成退货协议的次日起七天内进行退货。双方另有约定的，从其约定。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.3. </span><span class="s2">买家退货时应当采用与商家发货时相同类型的承运人进行退货。双方另有约定的，从其约定。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.4. </span><span class="s2">买家未在甲方规定或双方约定的期限内退货，对同一问题或维权原因再次主张要求退货的，应当自行和商家协商一致，否则，甲方有权不予处理。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.5. </span><span class="s2">买家依照本规则退货后，应当及时将承运单号告知商家，若商家签收商品时买家仍未获知该承运单号，商家主张表面不一致情形的，将由甲方根据实际情况分配举证责任。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.6. </span><span class="s2">买家使用到付方式退货的，应事先征得商家同意，并明确承运人和运费事宜。商家要求买家采取到付方式退货的，应当自行和买家明确承运人及运费事宜。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.7. </span><span class="s2">买家申请七天无理由退、换货的，依照甲方公示的七天无理由退、换货相关规则执行。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.8. </span><span class="s2">商家违反</span><span class="s3">“</span><span class="s2">退货、换货规范</span><span class="s3">”</span><span class="s2">致使买家无法完成退换货或商品已不适宜退货，交易支持退款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">3.9. </span><span class="s2">买家违反</span><span class="s3">“</span><span class="s2">退货、换货规范</span><span class="s3">”</span><span class="s2">致使商家未收到退货或拒签的，交易支持打款，由买家承担商品损毁或灭失的风险。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4. </span><span class="s2">运费规范（若甲方相关规则对商家应当承担的责任义务已有特别规定的，则优先适用特别规定。）</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.1. </span><span class="s2">买卖双方在甲方介入前自行达成退换货或维修协议但未就运费事宜进行说明或约定的，则由商家承担运费。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.2. </span><span class="s2">甲方介入后，买卖双方的运费争议将根据</span><span class="s3">“</span><span class="s2">谁过错、谁承担</span><span class="s3">”</span><span class="s2">的原则处理；双方各有过错的，由先有过错的一方承担。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.3. </span><span class="s2">买卖双方约定不清导致甲方无法确定争议责任归属致使交易退货退款的，发货运费由商家承担，退货运费由买家承担。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.4. </span><span class="s2">买家未经商家同意采取到付方式退货且商家予以签收商品的，若退货运费本由买家承担的，则该到付产生的运费由买家承担。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.5. </span><span class="s2">交易由买家承担退货运费时，若商家提供的退货地址和商品页面中</span><span class="s3">“</span><span class="s2">运费</span><span class="s3">”</span><span class="s2">或</span><span class="s3">“</span><span class="s2">配送</span><span class="s3">”</span><span class="s2">版块显示的发货地不一致，导致买家退货的运费高于按该发货地进行退货的运费，其差额由商家承担。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.6. </span><span class="s2">买家七天无理由退货或无理由拒签的，仅承担退回运费。双方另有约定的，从其约定。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">4.7. </span><span class="s2">买家七天无理由换货的，由买家承担换货所产生的所有运费。双方另有约定的，从其约定。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5. </span><span class="s2">质量问题、假冒商品情形举证责任分配及争议处置（若甲方相关规则对商家应当承担的责任义务已有特别规定的，则优先适用特别规定。）</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.1. </span><span class="s2">买家主张商品存在质量问题系肉眼可予识别的，应当提供初步凭证予以证明，甲方有权根据买家提供的凭证初步认定存在质量问题，商家应当针对买家给出的初步凭证予以作出甲方认可的合理解释或提供证据证明不存在质量问题，否则甲方将认定质量问题属实。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.2. </span><span class="s2">买家主张商品存在质量问题系肉眼不可识别的或系假冒商品的，商家应当按照甲方的要求提供厂家的经销凭证、报关单据（进口商品）、产品合格证、商业发票、执行标准等相关凭证以证明商品来源或出厂合规。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.3. </span><span class="s2">买家主张商品质量问题，商家已提供有效凭证的，买家应当根据甲方要求及时提供有效的质检凭证或其他有效凭证以证明商品存在质量问题。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.4. </span><span class="s2">买家主张假冒商品，商家已提供有效凭证的，买家应当按甲方的要求提供有效凭证证明系假冒商品。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.5. </span><span class="s2">买家主张肉眼可予识别的质量问题，但未予提供初步凭证的，交易支持打款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.6. </span><span class="s2">买家主张肉眼可予识别的质量问题且被甲方初步认定的，商家未提供甲方认可的合理解释或证据证明不存在质量问题的，商家应当按照国家法律法规履行退货、更换、维修等义务，若甲方相关规则对商家履行该等义务已有特别规定的，则优先适用特别规定。商家无法提供前述相关凭证的，交易支持退货退款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.7. </span><span class="s2">买家主张肉眼可予识别的质量问题且被甲方初步认定的，商家已提供甲方认可的合理解释或证据证明不存在质量问题且买家无法再予提供相反证据证明质量问题的，交易支持打款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.8. </span><span class="s2">买家主张肉眼不可识别的质量问题或假冒商品，商家已提供证明商品来源或出厂合规的相关凭证，同时买家无法证明商品存在质量问题或系假冒商品的，交易支持打款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.9. </span><span class="s2">买家主张肉眼不可识别的质量问题或假冒商品，商家无法提供证明商品来源或出厂合规的相关凭证，交易支持退货退款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.10. </span><span class="s2">买家主张肉眼不可识别的质量问题，商家已提供证明商品来源或出厂合规的相关凭证，但买家提供的质检报告等证实商品存在质量问题的，商家应当按照国家法律法规承担退货、更换、维修等违约责任。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.11. </span><span class="s2">商家出售假冒商品，买家基于生活消费所需购买的，交易支持退款并实行</span><span class="s3">“</span><span class="s2">假一赔三</span><span class="s3">”</span><span class="s2">。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.12. </span><span class="s2">商品因质量问题致使买家合同目的不能实现的，买家将退货商品交付承运人后，商品破损、损毁、灭失的风险由商家承担，交易支持退款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.13. </span><span class="s2">商品存在一定瑕疵但尚未影响买家合同目的实现的，买家将退货商品交付承运人后，商品破损的风险由商家承担，交易支持退款；若商品出现损毁、灭失情形的，交易支持打款，买家有权向承运人求偿。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.14. </span><span class="s2">应甲方要求，商品经买家送检后证实为质量问题的，检测费用由商家承担，若被检商品因检测而被物理破坏导致无法退货或无退货价值的，交易支持退款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">5.15. </span><span class="s2">非应甲方要求，买家仍将商品送检的，检测费用由双方自行协商处理。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.<span class="Apple-converted-space">&nbsp; </span></span><span class="s2">描述不当、表面不一致情形举证责任分配及争议处置（若甲方相关规则对商家应当承担的责任义务已有特别规定的，则优先适用特别规定。）</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.1. </span><span class="s2">买家主张商品存在描述不当系肉眼可予识别的，应当提供初步凭证予以证明，甲方有权根据买家提供的凭证初步认定存在描述不当，商家应当对买家提供的凭证作出甲方认可的合理解释或提供证据证明不存在描述不当，否则甲方将认定描述不当属实。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.2. </span><span class="s2">买家主张商品描述不当系肉眼不可识别情形的，按甲方要求进行举证。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.3. </span><span class="s2">买家主张商品存在表面不一致情形的，商家应就收件人已按本规则</span><span class="s3">“</span><span class="s2">签收规范</span><span class="s3">”</span><span class="s2">之规定签收商品承担举证责任；商家举证有效的，则由买家举证证明商品签收时即存在表面不一致情形。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.4. </span><span class="s2">买家主张商品存在表面不一致情形但已点击</span><span class="s3">“</span><span class="s2">确认收货</span><span class="s3">”</span><span class="s2">的，买家对主张商品存在表面不一致情形负举证责任。因商家的不正当行为诱使买家确认收货的情形除外。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.5. </span><span class="s2">商品的描述不当系无需使用，肉眼即可显著识别情形的，若商品完好，交易支持退货退款；若买家已经使用且影响商品完好的，交易支持打款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.6. </span><span class="s2">商家对商品或服务的描述存在违反广告法情形，或买家需使用商品后方能察觉该商品描述不当的，交易支持退货退款。若描述不当导致买家无法使用商品核心功能或完全无法使用商品的，买家将退货商品交付承运人后，商品的破损、损毁、灭失风险由商家承担。本规则另有说明的，从其说明。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.7. </span><span class="s2">买家已证明商品签收时存在表面不一致情形的，买家可视商品性质及损失大小合理选择要求商家承担补寄、换货、退货等违约责任。商家拒绝承担该等违约责任的，交易支持退货退款并实行</span><span class="s3">“</span><span class="s2">假一赔三</span><span class="s3">”</span><span class="s2">。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.8. </span><span class="s2">商家已证明买家签收商品时不存在表面不一致情形的，交易支持打款。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">6.9. </span><span class="s2">商品因签收时存在破损，致使交易作退货退款处理的，买家将退货商品交付承运人后产生的商品损毁、灭失风险由商家承担，交易支持退款。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">7. </span><span class="s2">撤销和中止</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">7.1. </span><span class="s2">甲方处理争议期间，出现下列情形之一的，甲方将中止争议处理程序：</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">1</span><span class="s2">）买卖双方一致要求中止，并约定期限自行协商处理争议；</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">2</span><span class="s2">）任何一方通知甲方要求将争议提交司法机关或拟向公安机关报案。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">7.2. </span><span class="s2">出现以下情形之一的，甲方将恢复争议处理程序：</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">1</span><span class="s2">）买卖双方自行协商处理争议的，应当在程序中止后</span><span class="s3"> 30 </span><span class="s2">日内自行操作交易款项，或向甲方提供协商结果，由甲方代为操作，逾期买卖双方既未操作交易款项也未告知协商结果的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">2</span><span class="s2">）一方通知甲方要求通过司法机关解决争议或拟向公安机关报案的，未在通知甲方后的</span><span class="s3"> 7 </span><span class="s2">个工作日内向甲方提供司法机关或公安机关的案件受理凭证的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">3</span><span class="s2">）争议被司法机关撤诉的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">4</span><span class="s2">）司法机关对争议作出判决且生效的。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">（</span><span class="s3">5</span><span class="s2">）公安机关受理案件后的六个月后仍未对案件给出调查结论或处理建议的。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">8. </span><span class="s1">执行</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">8.1. </span><span class="s2">甲方处理争议期间，买卖双方协商一致达成和解协议，但无法自行操作的，甲方有权根据双方达成的和解协议内容，自货款中扣除相应款项。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">8.2. </span><span class="s2">甲方对争议做出处理后，或行政机关及消协、人民调解委员会组织调解，买卖双方认可调解结果的，有权自货款中按照处理结果将交易款项和（或）保证金的全部或部分支付给买家和</span><span class="s3">(</span><span class="s2">或</span><span class="s3">)</span><span class="s2">商家，或协助商家</span><span class="s3">(</span><span class="s2">或买家</span><span class="s3">)</span><span class="s2">按照处理结果将相关款项支付给买家</span><span class="s3">(</span><span class="s2">或商家</span><span class="s3">)</span><span class="s2">。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">8.3. </span><span class="s2">除交易款项外，根据争议处理结果仍需商家承担赔偿责任的，甲方有权划拨商家依据甲方相关协议的货款项中支付给买家。</span>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s3">8.4. </span><span class="s2">商家账户余额不足致使无法退款或赔付买家的，由买卖双方自行协商或通过其他途径解决。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span><br/>\n' +
      '</p>\n' +
      '<p class="p8">\n' +
      '    <span class="s2">六．货款结算方式</span>\n' +
      '</p>\n' +
      '<ol class="ol1 list-paddingleft-2">\n' +
      '    <li>\n' +
      '        <p>\n' +
      '            <span class="s1">结算方式</span>\n' +
      '        </p>\n' +
      '    </li>\n' +
      '    <ol class="ol1 list-paddingleft-2" style="list-style-type: lower-alpha;">\n' +
      '        <li>\n' +
      '            <p>\n' +
      '                <span class="s4"><span class="Apple-tab-span">\t</span>1.1.</span><span class="s2">正常经营情况下，商家根据买家确认收货后或线下订单核销完成，买家支付至甲方的货款自动进入商家账户，商家可通过甲方提供的商家后台管理账户及密码实现货款自提。</span>\n' +
      '            </p>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '            <p>\n' +
      '                <span class="s4"><span class="Apple-tab-span">\t</span>1.2.</span><span class="s2">若商家存在虚假发货、欺诈发货等违约行为</span><span class="s3">,</span><span class="s2">甲方有权调整相关订单的确认收货规则和线下核销规则，相关订单的货款需买家主动确认收货或主动申请退款后，方可计入商家账户余额。</span>\n' +
      '            </p>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '            <p>\n' +
      '                <span class="s4"><span class="Apple-tab-span">\t</span>1.3.</span><span class="s2">为避免歧义</span><span class="s3">,</span><span class="s2">各方确认</span><span class="s3">,</span><span class="s2">甲方不为商家垫付货款</span><span class="s3">,</span><span class="s2">商家申请提取的货款以甲方实际收到的买家货款为限。</span>\n' +
      '            </p>\n' +
      '        </li>\n' +
      '    </ol>\n' +
      '</ol>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <br/>\n' +
      '</p>\n' +
      '<p>\n' +
      '    七<span class="s4">.</span><span class="s2">合作期限</span>\n' +
      '</p>\n' +
      '<p class="p10">\n' +
      '    <span class="s2">本协议经商家接受且经过米粒生活平台审核通过后（或书面签署后）即生效，除非本协议规定的终止条件发生，本协议持续有效。双方另有约定的除外。</span>\n' +
      '</p>\n' +
      '<p class="p9">\n' +
      '    <span class="s2"></span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <br/>\n' +
      '</p>\n' +
      '<p>\n' +
      '    八<span class="s4">.</span><span class="s2">其他</span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <span class="s4">1.</span><span class="s2">本协议签订后，针对本协议未做约定、约定不明的条款或者有其他新情况需要明确的，甲方有权进行完善并无需征得乙方同意，并通过官方发布公告的形式予以公布，经公布后对乙方具有约束力。</span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <span class="s4">2.</span><span class="s2">米粒生活平台已经发布及后续的相关规则、办法均为本协议的附件，乙方应当遵守。</span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <span class="s4">3.</span><span class="s2">因本协议发生争议，由甲方所在地人民法院管辖。</span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <br/>\n' +
      '</p>';
    return <div style={styles.container} dangerouslySetInnerHTML={{ __html: content }} />;
  }
}
