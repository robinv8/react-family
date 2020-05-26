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
      '    <span class="s1">甲乙双方依据《中华人民共和国合同法》及相关法律法规的规定，本着互利互惠、利益共享、相互促进的原则，经友好协商，就乙方加盟甲方旗下米粒生活平台（以下简称</span><span class="s2">“</span><span class="s1">米粒生活</span><span class="s2">”</span><span class="s1">），推广其米粒生活平台之相关事宜，达成本协议，以共同遵照执行。</span><span class="s1"></span>\n' +
      '</p>\n' +
      '<p class="p2">\n' +
      '    <span class="s3"><span class="Apple-converted-space">&nbsp; &nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p2">\n' +
      '    <span class="s1"></span><br/>\n' +
      '</p>\n' +
      '<p class="p3">\n' +
      '    <span class="s4"><strong>一、定义和解释</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">1.1 </span><span class="s1">米粒生活服务商：是指杭州湘靖网络科技有限公司授权在当地拓展米粒生活店主、为店主推广提供服务支持的服务商。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">1.2 </span><span class="s1">米粒生活：是指由杭州湘靖网络科技有限公司（以下简称</span><span class="s2">“</span><span class="s1">甲方</span><span class="s2">”</span><span class="s1">或湘靖网络）自主研发的，提供给用户使用的手机购物</span><span class="s2">APP</span><span class="s1">软件。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">1.3</span><span class="s1">用户（或称</span><span class="s2">“</span><span class="s1">店主</span><span class="s2">”</span><span class="s1">）：是指通过本地服务商，加入甲方米粒生活平台的企业、个体工商户或个人。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">1.4 </span><span class="s1">服务商等级：是指甲方用于区分所加盟的米粒生活服务商权益所制定的等级。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">1.5 </span><span class="s1">加盟费：是指乙方加入米粒生活服务商时，为获得甲方的经营许可、软件服务支持、培训服务支持，向甲方一次性支付的费用。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">1.6 </span><span class="s1">授权城市：甲方授权乙方开展米粒生活业务的城市。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">1.7 </span><span class="s1">本协议：完整的本协议应由本协议正文（以下简称</span><span class="s2">“</span><span class="s1">正文</span><span class="s2">”</span><span class="s1">）及附件（以下简称为</span><span class="s2">“</span><span class="s1">附件</span><span class="s2">”</span><span class="s1">）组成，正文和附件均为协议不可分割的一部分。除非另有明确书面约定，甲乙双方就米粒生活平台开展的合作，均应适用本协议中的相应条款。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">本协议的正文、附件及对其的补充、修改文本均由甲方提供，经甲乙双方协商同意，按照本协约定的条件和程序生效。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s1">如果甲乙双方在未来开展本协议项下以外的合作，则双方可友好协商，或单独就新增合作另行签署协议，或将新增合作内容纳入本协议项下，按本协议的约定执行。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>二、声明及保证</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">2.1 </span><span class="s1">每一方均声明及保证，自本协议签署之日起：</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">①其有资格从事本协议项下之交易，而该等交易符合其经营范围之规定；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">②其可全权订立本协议并履行其于本协议项下之义务；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">③其授权代表拥有充分授权，代表其签署本协议；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">④就其所知，其已向另一方披露经注册地或营业地政府部门签发的、可能对履行本协议项下义务产生重大不利影响的所有文件；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">⑤其在本协议签署之日并非清算、解散或破产程序之主体。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">2.2 </span><span class="s1">每一方均保证本协议的签署与履行及根据本协议所计划之商业交易在任何方面均不违反中国法律。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">2.3 </span><span class="s1">双方确认：</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">①自生效日起，本协议对双方均具有法律约束力。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s1">②任一方均不得违反上述声明和承诺以及本协议项下的权利义务，否则将被视为违约行为，由此造成守约方损失的，违约方还应当补足守约方实际损失。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>三、合作事项</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">3.1</span><span class="s1">甲方授权乙方在开展米粒生活业务，并为乙方开展米粒生活业务提供软件支持、培训支持。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">3.2 </span><span class="s1">乙方依照本协议的约定向本地服务市场商户推广米粒生活，并通过乙方签约合作，乙方为乙方客户提供相应的产品咨询解答、培训、售后服务及其他相关服务；</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">3.3 </span><span class="s1">甲方依据本协议的约定，为乙方提供包括但不限于如下支持：商业推广支持、米粒生活相应的物料支持、培训支持、管理规范支持及其他政策性支持；对米粒生活提供相应的更新升级及服务器配置等相关技术支持；对乙方的上述行为实施监督和管理。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>四、甲方的权利和义务</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">4.1 </span><span class="s1">甲方有权审核乙方提供的营业执照、资质证明、银行账户及其他企业相关信息等材料，并根据实际情况，随时要求乙方就其企业、经营、信用等进一步补充资料。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">4.2</span><span class="s1">乙方理解并同意，甲方有权要求乙方遵守和执行米粒生活服务商的管理规定。甲方有权根据业务及市场发展情况，制定或修改米粒生活服务商的相关管理规定、技术规范、质量标准、考核规范等文件，并以适当方式（包括但不限于书面或电子邮件形式）告知乙方，以供乙方遵守和执行；甲方有权依据上述管理规定对乙方的业务和经营情况进行考核并做出相应的处理。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">4.3 </span><span class="s1">甲方将向乙方提供</span><span class="s2">APP</span><span class="s1">产品推广范围内的培训支持和技术支持，帮助乙方提高推广业务能力。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">4.4 </span><span class="s1">甲方有权对乙方客户进行内容审查、功能性和安全性测试等，如发现含有国家明令禁止内容的信息、涉嫌侵犯他人合法权利的信息、不符合相关技术或安全性要求的内容等，甲方有权停止服务，还将按照国家电信法规、网络监管法规的相关规定，保存有关记录以备主管部门审查；情节严重的，甲方将向相关主管部门报告。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">4.5</span><span class="s1">对于乙方与其签约客户之间的纠纷、争议、损失、侵权、违约责任等，均由乙方与其签约客户自行解决，甲方不对乙方签约客户所涉及的赔偿和其他责任负责。如有乙方签约店主直接向甲方投诉的，甲方将首先引导至乙方解决。但为了维护合作双方的合法权益，甲方有权适时介入处理。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">4.6 </span><span class="s1">如果乙方违反</span><span class="s2">“</span><span class="s1">米粒生活服务商</span><span class="s2">”</span><span class="s1">的管理规范，甲方有权解除本协议，并酌情追究乙方的违约责任。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">4.7 </span><span class="s1">合作期内，甲方由于自身经营政策的调整，可能会对米粒生活产品的名称、入口、网址、业务范围等进行调整。乙方同意，如前述调整不影响本协议项下的乙方权利义务，则该种调整不属于对本协议的修改或变更，甲方仅需将上述调整通知乙方即可。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>五、乙方的权利和义务</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">5.1 </span><span class="s1">乙方在签署本协议时及本协议合作期间内，须按照甲方的要求，提供真实有效的身份证信息、营业执照、资信证明、银行账户等相关资料，并保证其所提供的店主信息及</span><span class="s2">/</span><span class="s1">或服务符合相关要求。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">5.2 </span><span class="s1">乙方对其推广服务无自主定义和定价的权利，乙方应保证其向用户提供的推广服务符合甲方市场统一价格，并同意接受甲方对整个交易过程的监管。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">5.3 </span><span class="s1">乙方在向用户推广平台时，应明确告知用户其本身为所推广产品的地区责任主体，并以自身的名义与用户签订合同，独立承担全部合同权利义务。同时，乙方应直接面对用户履行各项合同义务，包括但不限于提供</span><span class="s2">APP</span><span class="s1">产品、解答与</span><span class="s2">APP</span><span class="s1">产品相关的用户疑问、培训指导、售后支持等。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">5.4</span><span class="s1">甲乙双方在本协议终止时，乙方应当依照甲方的要求进行退出清算并开展善后工作。合作终止后，还在服务期限内的店主，乙方有义务继续提供服务直至相关服务期满。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>六、知识产权</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">6.1 </span><span class="s1">甲方官方</span><span class="s2">APP</span><span class="s1">上的所有内容，包括但不限于著作、图片、档案、资讯、资料、</span><span class="s2">APP</span><span class="s1">架构、</span><span class="s2">APP</span><span class="s1">画面的排版、网页设计，均由甲方或其他权利人依法拥有其知识产权，包括但不限于商标权、专利权、著作权、商业秘密等。非经甲方或其他权利人书面同意，任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表任何程序或内容。</span><span class="s2"><span class="Apple-converted-space">&nbsp;</span></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">6.2 </span><span class="s1">未经甲方书面授权，乙方不得以甲方</span><span class="s2">&quot;</span><span class="s1">办事处</span><span class="s2">&quot;</span><span class="s1">、</span><span class="s2">“</span><span class="s1">代理</span><span class="s2">”</span><span class="s1">、某级别</span><span class="s2">“</span><span class="s1">代理</span><span class="s2">”</span><span class="s1">、</span><span class="s2">“</span><span class="s1">地区代理</span><span class="s2">”</span><span class="s1">或</span><span class="s2">&quot;</span><span class="s1">地区服务商</span><span class="s2">&quot;</span><span class="s1">以及其他具有垄断性、排他性和其它未经甲方授权的名义进行广告宣传及商业活动。且不得将甲方与乙方作任何实质性联系，其企业名称不得出现</span><span class="s2">“</span><span class="s1">湘靖网络</span><span class="s2">”</span><span class="s1">等引人误解其为甲方分公司或分支机构的字样。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">6.3 </span><span class="s1">因乙方违反上述规定而给第三人或者甲方造成损害的，乙方应当承担一切责任。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>七、保密义务</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">7.1 </span><span class="s1">双方承诺，未经一方的书面同意，另一方对于有关本协议的内容及双方在履行本协议过程中知悉的对方的商业秘密，不得以任何方式透露给任何第三方或本公司内与履行本协议无关的其他人员。双方同意保守对方全部商业秘密，这些信息无论其为何种形式，均为对方的绝对财产。</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">7.2 </span><span class="s1">乙方有责任对通过本协议项下合作业务获得的所有米粒生活保密信息（包括但不限于本协议条款、服务商合作信息、用户资料等）予以保密。乙方了解，甲方产品信息（如产品详细资料、培训</span><span class="s2">ppt</span><span class="s1">、及其他相关物料）、服务商合作信息（如服务商价格及合作模式、甲方未公开披露的经营数据、米粒生活店主信息等）及技术资料等保密信息是甲方的核心资产，其泄露将给甲方造成难以预估的后果。所以若乙方违反保密义务的，给甲方造成损失的，乙方需要承担相应损失赔偿。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s1">乙方理解并同意，上述保密信息仅为举例。相关信息是否属于保密信息，乙方应当及时联系甲方，由甲方进行确认。未经确认即透露给他人的，应当承担违约责任。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>八、违约责任</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">8.1 </span><span class="s1">任何一方违反本协议的任何条款、不履行应尽之义务或者履行义务不符合本协议之约定的（以下简称</span><span class="s2">“</span><span class="s1">违约方</span><span class="s2">”</span><span class="s1">），则应被视为违反了其在本协议项下之义务。守约的一方（</span><span class="s2">“</span><span class="s1">守约方</span><span class="s2">”</span><span class="s1">）有权发出书面通知要求</span><span class="s2">“</span><span class="s1">违约方</span><span class="s2">”</span><span class="s1">于收到书面通知之日起十（</span><span class="s2">10</span><span class="s1">）个自然日内纠正其违约行为。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">8.2 </span><span class="s1">乙方违约后应当支付违约金或乙方的违约行为导致甲方遭受实际损失的，甲方有权继续追偿，乙方有义务支付直至付清全部款项。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>九、合同的终止</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">9.1</span><span class="s1">本协议于下列任一情形出现时终止：</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">①协议期限届满而双方决定不再续约的；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">②双方书面协商一致，提前终止本协议的；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">③双方另行达成其他协议，取代本协议的；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">④一方严重违约致使本协议无法继续履行，另一方提出解除的；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">⑤如不可抗力持续</span><span class="s2">30</span><span class="s1">日以上，任何一方发出终止本协议的书面通知终止本协议；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s1">⑥任何一方宣布破产或进入清算或解散程序；</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">9.2 </span><span class="s1">终止后之事项</span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">9.2.1</span><span class="s1">本协议项下合作事宜无论因何种理由终止后，乙方均无权继续推广甲方的</span><span class="s2">APP</span><span class="s1">产品，还在服务期限内的店主甲方有义务继续提供服务直至相关商品的服务期满。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">9.2.2 </span><span class="s1">本协议终止后，又发现乙方存在违约行为的，甲方保留对乙方违约行为进行继续追究的权利。</span>\n' +
      '</p>\n' +
      '<p class="p6">\n' +
      '    <span class="s4"><strong>十、适用法律和争议解决</strong></span>\n' +
      '</p>\n' +
      '<p class="p4">\n' +
      '    <span class="s2">10.1 </span><span class="s1">本协议之签署、效力、解释和执行以及本协议项下争议之解决均应适用中华人民共和国法律。</span>\n' +
      '</p>\n' +
      '<p class="p5">\n' +
      '    <span class="s2">10.2 </span><span class="s1">对于因本协议的解释及执行而产生之争议，应首先由双方通过友好协商来解决。如争议未能于前述方式在开始协商后三十</span><span class="s2">(30)</span><span class="s1">个工作日内解决，则任何一方均可将有关争议提交杭州市余杭区人民法院解决。</span>\n' +
      '</p>\n' +
      '<p>\n' +
      '    <br/>\n' +
      '</p>';
    return <div style={styles.container} dangerouslySetInnerHTML={{ __html: content }} />;
  }
}
