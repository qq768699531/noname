const translates = {
	puyuan: "蒲元",
	pytianjiang: "天匠",
	pytianjiang_info: "游戏开始时，你随机获得两张不同副类别的装备牌，并置入你的装备区。出牌阶段，你可以将装备区的牌移动至其他角色的装备区（可替换原装备）。若你以此法移动了〖铸刃〗的衍生装备，你摸两张牌。",
	pytianjiang_move: "天匠",
	pyzhuren: "铸刃",
	pyzhuren_info: "出牌阶段限一次，你可以弃置一张手牌。根据此牌的花色点数，你有一定概率打造成功并获得一张武器牌（若打造失败或武器已有则改为摸一张【杀】，花色决定武器名称，点数决定成功率）。此武器牌进入弃牌堆时，将其移出游戏。",
	pyzhuren_destroy: "铸刃",
	pyzhuren_heart: "红缎枪",
	pyzhuren_heart_info: "每回合限一次，当你使用【杀】造成伤害后，你可以进行判定，若结果为：红色，你回复1点体力；黑色：你摸两张牌。",
	pyzhuren_diamond: "烈淬刀",
	pyzhuren_diamond_info: "每回合限两次，当你使用【杀】对目标角色造成伤害时，你可以弃置一张牌，令此伤害+1。你使用【杀】的次数上限+1。",
	pyzhuren_club: "水波剑",
	pyzhuren_club_info: "每回合限两次，当你使用普通锦囊牌或【杀】时，你可以为此牌增加一个目标。当你失去装备区里的【水波剑】后，你回复1点体力。",
	pyzhuren_spade: "混毒弯匕",
	pyzhuren_spade_info: "当你使用【杀】指定目标后，你可令其失去X点体力（X为此技能本回合内发动过的次数且至多为5）。",
	pyzhuren_shandian: "天雷刃",
	pyzhuren_shandian_info: "当你使用【杀】指定目标后，可令其进行判定，若结果为：黑桃，其受到3点雷属性伤害；梅花，其受到1点雷属性伤害，你回复1点体力并摸一张牌。",
	guanlu: "管辂",
	tuiyan: "推演",
	tuiyan_info: "出牌阶段开始时，你可以观看牌堆顶的三张牌。",
	busuan: "卜算",
	busuan_info: "出牌阶段限一次，你可以选择一名其他角色，然后选择至多两张不同的卡牌名称（限基本牌或锦囊牌）。该角色下次摸牌阶段摸牌时，改为从牌堆或弃牌堆中获得你选择的牌。",
	busuan_angelbeats: "卜算",
	mingjie: "命戒",
	mingjie_info: "结束阶段，你可以摸一张牌，若此牌为红色，你可以重复此流程直到摸到黑色牌或摸到第三张牌。当你以此法摸到黑色牌时，若你的体力值大于1，则你失去1点体力。",
	gexuan: "葛玄",
	gxlianhua: "炼化",
	gxlianhua_info: "你的回合外，每当有其他角色受到伤害后，你获得一个“丹血”标记（该角色与你阵营一致时为红色，不一致为黑色，此颜色对所有玩家均不可见）直到你的准备阶段开始。准备阶段，根据你获得的“丹血”标记的数量和颜色，你从牌堆/弃牌堆中获得相应的牌以及相应技能直到回合结束。3枚或以下：〖英姿〗和【桃】；超过3枚且红色“丹血”较多：〖观星〗和【无中生有】；超过3枚且黑色“丹血”较多：〖直言〗和【顺手牵羊】；超过3枚且红色和黑色一样多：【杀】、【决斗】和〖攻心〗。",
	zhafu: "札符",
	zhafu_info: "限定技，出牌阶段，你可以选择一名其他角色，令其获得一枚「札」。有「札」的角色弃牌阶段开始时，若其手牌数大于1，其移去「札」并选择保留一张手牌，然后将其余的手牌交给你。",
	leitong: "雷铜",
	kuiji: "溃击",
	kuiji_info: "出牌阶段限一次。你可以将一张黑色基本牌当作【兵粮寸断】置于你的判定区，然后摸一张牌。若如此做，你可以对体力值最多的一名对手造成2点伤害。对手因此进入濒死状态时，你或队友体力值最少的一方回复1点体力。",
	kuiji_info_identity: "出牌阶段限一次。你可以将一张黑色基本牌当做【兵粮寸断】置于你的判定区，摸一张牌，然后你可以对体力值最多的一名其他角色造成2点伤害。该角色因此进入濒死状态时，你可令一名除其外体力值最少的角色回复1点体力。",
	kuiji_info_guozhan: "出牌阶段限一次。你可以将一张黑色基本牌当做【兵粮寸断】置于你的判定区，摸一张牌，然后你可以对体力值最多的一名其他角色造成2点伤害。该角色因此进入濒死状态时，你可令一名除其外体力值最少的角色回复1点体力。",
	wulan: "吴兰",
	wlcuorui: "挫锐",
	wlcuorui_info: "出牌阶段开始时，你可以弃置你或队友区域里的一张牌。若如此做，你选择一项：1.弃置对手装备区里至多两张与此牌颜色相同的牌；2.展示对手的共计两张手牌，然后获得其中与此牌颜色相同的牌。",
	wlcuorui_info_identity: "出牌阶段开始时，你可以弃置一名你至其的距离不大于1的角色区域里的一张牌，然后你选择一项：1.弃置另一名其他角色装备区里至多两张与此牌颜色相同的牌；2.展示另一名其他角色的至多两张手牌，然后获得其中与此牌颜色相同的牌。",
	wlcuorui_info_guozhan: "出牌阶段开始时，你可以弃置一名你至其的距离不大于1的角色区域里的一张牌，然后你选择一项：1.弃置另一名其他角色装备区里至多两张与此牌颜色相同的牌；2.展示另一名其他角色的至多两张手牌，然后获得其中与此牌颜色相同的牌。",
	huaman: "花鬘",
	manyi: "蛮裔",
	manyi_info: "锁定技，【南蛮入侵】对你无效。",
	manyi_info_single_normal: "锁定技，【南蛮入侵】对你无效。当你登场时，你可以视为使用一张【南蛮入侵】。",
	mansi_viewas: "蛮嗣",
	mansi: "蛮嗣",
	mansi_info: "出牌阶段限一次，你可以将所有手牌当做【南蛮入侵】使用；当有角色受到【南蛮入侵】的伤害后，你摸一张牌。",
	souying: "薮影",
	souying_info: "每回合限一次，当你对其他角色（或其他角色对你）使用【杀】或普通锦囊牌指定唯一目标后，若此牌不是本回合你对其（或其对你）使用的第一张【杀】或普通锦囊牌，你可以弃置一张牌，获得此牌对应的所有实体牌（或令此牌对你无效）。",
	zhanyuan: "战缘",
	zhanyuan_info: "觉醒技，准备阶段，若你已因蛮嗣累计获得超过七张牌，你加1点体力上限并回复1点体力，并可以选择一名男性角色，你与其获得技能〖系力〗，然后你失去技能〖蛮嗣〗。",
	hmxili: "系力",
	hmxili_info: "每回合限一次，你的回合外，当其他拥有【系力】技能的角色在其回合内对没有【系力】技能的角色造成伤害时，你可以弃置一张牌，令此伤害+1，然后你与其各摸两张牌。",
	wangshuang: "王双",
	spzhuilie: "追猎",
	spzhuilie2: "追猎",
	spzhuilie_info: "锁定技，你使用【杀】无距离限制；当你使用【杀】指定目标后，若其不在你的攻击范围内，此【杀】不计入使用次数限制且你判定。若判定结果为武器牌或坐骑牌，此【杀】的伤害基数改为X（X为其体力值）。否则你失去1点体力。",
	wenyang: "文鸯",
	xinlvli: "膂力",
	xinlvli_info: "每回合限一次，当你造成伤害后，你可选择：1，若你的体力值大于你的手牌数，你摸Ｘ张牌；2，若你的手牌数大于你的体力值且你已受伤，你回复Ｘ点体力（Ｘ为你的手牌数与体力值之差）。",
	lvli: "膂力",
	lvli4: "膂力",
	lvli5: "膂力",
	lvli_info: "每名角色的回合限一次，你可以声明一个基本牌或普通锦囊牌的牌名，有随机概率视为使用之（装备区里的牌数越多，成功概率越大）。",
	choujue: "仇决",
	choujue_info: "觉醒技，一名角色的回合结束时，若你的手牌数和体力值相差3或更多，你减1点体力上限并获得技能〖背水〗，然后将〖膂力〗改为“在自己的回合时每回合限两次”。",
	beishui: "背水",
	beishui_info: "觉醒技，准备阶段，若你的手牌数或体力值小于2，你减1点体力上限并获得技能〖清剿〗，然后将〖膂力〗改为受到伤害后也可以发动。",
	qingjiao: "清剿",
	qingjiao_info: "出牌阶段开始时，你可以弃置所有手牌，然后从牌堆或弃牌堆中随机获得八张牌名各不相同且副类别不同的牌。若如此做，结束阶段，你弃置所有牌。",
	re_liuzan: "留赞",
	refenyin: "奋音",
	refenyin_info: "锁定技，你的回合内，当一张牌进入弃牌堆后，若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆，则你摸一张牌。",
	liji: "力激",
	liji_info: "出牌阶段限X次，你可以弃置一张牌并对一名其他角色造成1点伤害。（X为本回合内进入过弃牌堆的卡牌数除以8，若场上人数小于5则改为除以4，向下取整）",
	liubian: "刘辩",
	shiyuan: "诗怨",
	shiyuan_info: "每回合每项限一次，当你成为其他角色使用牌的目标后：①若其体力值大于你，你摸三张牌。②若其体力值等于你，你摸两张牌。③若其体力值小于你，你摸一张牌。",
	dushi: "毒逝",
	dushi_info: "锁定技，你处于濒死状态时，其他角色不能对你使用【桃】。你死亡时，你选择一名其他角色获得〖毒逝〗。",
	yuwei: "余威",
	yuwei_info: "主公技，锁定技，其他群雄角色的回合内，你将〖诗怨〗改为“每回合每项限两次”。",
	re_xinxianying: "新杀辛宪英",
	re_xinxianying_prefix: "新杀",
	rezhongjian: "忠鉴",
	rezhongjian2: "忠鉴",
	rezhongjian_info: "出牌阶段限一次，你可以选择一名本回合内未选择过的角色。你令其获得一项效果直至你的下回合开始：①其下次造成伤害后弃置两张牌，然后你摸一张牌。②其下次受到伤害后摸两张牌，然后你摸一张牌。",
	recaishi: "才识",
	recaishi3: "才识",
	recaishi_info: "摸牌阶段结束时，若你于本阶段内因摸牌而获得的所有的牌：花色均相同，你将〖忠鉴〗于本回合内改为“出牌阶段限两次”。不均相同，你可回复1点体力。若如此做，你本回合内不能对自己使用牌。",
	guozhao: "郭照",
	pianchong: "偏宠",
	pianchong2: "偏宠",
	pianchong_info: "摸牌阶段开始时，你可放弃摸牌。若如此做，你从牌堆中获得一张红色牌和一张黑色牌。然后你选择一种颜色。你的下回合开始前，当你失去该颜色的一张牌后，你从牌堆中获得另一种颜色的一张牌。",
	zunwei: "尊位",
	zunwei_backup: "尊位",
	zunwei_info: "出牌阶段限一次，你可选择本局游戏内未选择过的一项：①若你已受伤，则你可以选择一名体力值大于你的其他角色，你将体力值回复至X（X为你的体力上限与其体力值中的较小值）②选择一名手牌数大于你的其他角色，你将手牌数摸至与其相同（至多摸五张）③选择一名装备区内牌数大于你的其他角色。你令X=1。若你装备区内的('equip'+X)栏为空，则你使用牌堆中的一张副类别为('equip'+X)，且能对自己使用的装备牌。你令X+1。若X不大于5，且你装备区内的牌数仍小于目标角色，则你重复此流程。",
	fanyufeng: "樊玉凤",
	bazhan: "把盏",
	bazhan_info: "转换技，出牌阶段限一次，阴：你可以将至多两张手牌交给一名其他角色。阳：你可以获得一名其他角色的至多两张手牌。若以此法移动的牌包含【酒】或♥牌，则你可令得到牌的角色执行一项：①回复1点体力。②复原武将牌。",
	jiaoying: "醮影",
	jiaoying2: "醮影",
	jiaoying3: "醮影",
	jiaoying3_draw: "醮影",
	jiaoying_info: "锁定技，其他角色得到你的手牌后，该角色本回合不能使用或打出与此牌颜色相同的牌。然后此回合结束时，若其本回合没有再使用牌，你令一名角色将手牌摸至五张。",
	ruanyu: "阮瑀",
	xingzuo: "兴作",
	xingzuo2: "兴作",
	xingzuo_info: "出牌阶段开始时，你可观看牌堆底的三张牌并用任意张手牌替换其中等量的牌。若如此做，结束阶段，你可令一名有手牌的角色用所有手牌替换牌堆底的三张牌。若其因此法失去的牌多于三张，则你失去1点体力。",
	miaoxian: "妙弦",
	miaoxian_info: "若你的手牌中仅有一张黑色牌，你可将此牌当作任意一张普通锦囊牌使用（每回合限一次）；若你的手牌中仅有一张红色牌，你使用此牌时摸一张牌。",
	yangwan: "杨婉",
	youyan: "诱言",
	youyan_info: "出牌阶段/弃牌阶段各限一次。当有牌进入弃牌堆后，若其中有你不因使用或打出而失去的牌，你可以从牌堆中获得你本次失去的牌中没有的花色的牌各一张。",
	zhuihuan: "追还",
	zhuihuan2: "追还",
	zhuihuan2_new: "追还",
	zhuihuan_info: "结束阶段开始时，你可以选择一名角色（对其他角色不可见）。记录所有对该角色造成过伤害的角色。该角色的下个准备阶段开始时停止记录，且所有记录过的角色：若体力值大于该角色，则受到其造成的2点伤害；若体力值小于等于该角色，则随机弃置两张手牌。",
	re_panshu: "潘淑",
	zhiren: "织纴",
	zhiren_info: "当你于你的回合内使用第一张非转化牌时，你可依次执行以下选项中的前X项：①卜算X。②可弃置场上的一张装备牌和延时锦囊牌。③回复1点体力。④摸三张牌。（X为此牌的名称的字数）",
	yaner: "燕尔",
	yaner_info: "每回合限一次。当有其他角色于其出牌阶段内失去手牌后，若其没有手牌，则你可以与其各摸两张牌。若其以此法摸得的两张牌类型相同，则其回复1点体力。若你以此法摸得的两张牌类型相同，则你将〖织纴〗中的“你的回合内”改为“一回合内”直至你下回合开始。",
	zhouyi: "周夷",
	zhukou: "逐寇",
	zhukou_info: "①当你于一名角色的出牌阶段第一次造成伤害后，你可以摸X张牌（X为本回合你已使用的牌数）。②你的结束阶段，若你本回合没有造成伤害，你可以对两名其他角色各造成1点伤害。",
	mengqing: "氓情",
	mengqing_info: "觉醒技。准备阶段，若场上已受伤的角色数大于你的体力值，你加3点体力上限并回复3点体力，失去〖逐寇〗，获得〖玉殒〗。",
	yuyun: "玉殒",
	yuyun_info: "锁定技，出牌阶段开始时，你失去1点体力或体力上限（不能减至1以下），然后选择X+1项（X为你已损失的体力值）：①摸两张牌；②对一名其他角色造成1点伤害，然后本回合对其使用【杀】无距离和次数限制；③本回合的手牌上限视为无限；④获得一名其他角色区域内的一张牌；⑤令一名其他角色将手牌摸至体力上限（最多摸至5）。",
	caojinyu: "曹金玉",
	yuqi: "隅泣",
	yuqi_info: "每回合限两次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>0</span>，则你可以观看牌堆顶的<span class=firetext>3</span>张牌。你将其中至多<span class=greentext>1</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>1</span>张牌，并将其余牌以原顺序放回牌堆顶。（所有具有颜色的数字至多为5）",
	shanshen: "善身",
	shanshen_info: "当有角色死亡时，你可令你的〖隅泣〗中的一个具有颜色的数字+2。然后若你未对该角色造成过伤害，则你回复1点体力。",
	xianjing: "娴静",
	xianjing_info: "准备阶段，你可令你的〖隅泣〗中的一个具有颜色的数字+1。若你的体力值等于体力上限，则你可以重复一次此流程。",
	re_sunyi: "孙翊",
	syjiqiao: "激峭",
	syjiqiao_info: "出牌阶段开始时，你可将牌堆顶的X张牌置于你的武将牌上（X为你的体力上限）。当你于此出牌阶段内使用的牌结算结束后，你可以获得其中的一张牌，然后若剩余牌中红色牌和黑色牌的数量：不相等，你失去1点体力；相等，你回复1点体力。出牌阶段结束时，你将这些牌置入弃牌堆。",
	syxiongyi: "凶疑",
	syxiongyi_info: "限定技。当你处于濒死状态时，若剩余武将牌堆中：有“徐氏”，则你可以将体力值回复至3点，并将此武将牌替换为“徐氏”；没有“徐氏”，则你可以将体力值回复至1点并获得〖魂姿〗。",
	re_zhangbao: "新杀张宝",
	re_zhangbao_prefix: "新杀",
	xinzhoufu: "咒缚",
	xinzhoufu2: "咒缚",
	xinzhoufu_info: "出牌阶段限一次。你可以将一张手牌置于一名其他角色的武将牌上并称为“咒”，且当其判定时，将其“咒”作为判定牌。",
	xinyingbing: "影兵",
	xinyingbing_info: "锁定技。每回合每名角色限一次，当你使用牌指定有“咒”的角色为目标后，你摸两张牌。",
	wufan: "吴范",
	tianyun: "天运",
	tianyun_info: "①游戏的第一个回合开始前，你从牌堆中获得手牌区内没有的花色的各一张牌。②一名角色的回合开始时，若其座位号等于游戏轮数，则你可观看牌堆顶的X张牌并以任意顺序置于牌堆顶或牌堆底。若你将所有的牌均置于了牌堆底，则你可以令一名角色摸X张牌，然后失去1点体力。（X为你手牌中包含的花色数）",
	wfyuyan: "预言",
	wfyuyan_info: "一轮游戏开始时，你选择一名角色（对其他角色不可见）：当第一次有角色于本轮内进入濒死状态时，若其是你选择的角色，则你获得〖奋音〗直到你的回合结束；当第一次有角色于本轮内造成伤害后，若其是你选择的角色，则你摸两张牌。",
	re_fengfangnv: "冯妤",
	tiqi: "涕泣",
	tiqi_info: "其他角色的摸牌阶段结束时/被跳过时，若其于本阶段内因摸牌而得到的牌数X不等于2，则你可以摸|X-2|张牌，并可令其本回合的手牌上限±|X-2|。",
	baoshu: "宝梳",
	baoshu_info: "①准备阶段，你可选择Y名角色，这些角色重置武将牌并获得(X-Y+1)个“梳”（X为你的体力上限，Y∈[1, X]）。②一名角色的摸牌阶段开始时，若其有“梳”，则其本阶段的额定摸牌数+Z且移去Z个“梳”（Z为其“梳”的数量）。",
	dc_luotong: "骆统",
	renzheng: "仁政",
	renzheng_info: "锁定技。当有伤害被防止时，或伤害值发生过减少的伤害事件结算结束后，你摸两张牌。",
	jinjian: "进谏",
	jinjian_info: "①当你造成伤害时，你可令此伤害+1，然后你本回合内下一次造成的伤害-1且不触发〖进谏①〗。②当你受到伤害时，你可令此伤害-1。然后你于本回合内下一次受到的伤害+1且不触发〖进谏②〗。",
	caomao: "曹髦",
	qianlong: "潜龙",
	qianlong_info: "当你受到伤害后，你可以亮出牌堆顶的三张牌并获得其中的至多X张牌（X为你已损失的体力值），然后将剩余的牌置于牌堆底。",
	fensi: "忿肆",
	fensi_info: "锁定技。准备阶段，你须选择一名体力值不小于你的角色并对其造成1点伤害，然后若你选择的角色不为你自己，则其视为对你使用一张【杀】。",
	juetao: "决讨",
	juetao_info: "限定技。出牌阶段开始时，若你的体力值为1，则你可以选择一名其他角色。你亮出牌堆底的一张牌，若此牌能被你使用，则你使用此牌并重复此流程直到出现不可使用的牌或其死亡（你与其以外的角色不是此牌的合法目标）。",
	zhushi: "助势",
	zhushi_info: "主公技。每回合限一次，其他魏势力角色于回合内回复体力时，其可令你摸一张牌。",
	laiyinger: "来莺儿",
	xiaowu: "绡舞",
	xiaowu_info: "出牌阶段限一次，你可以选择任意名座位连续且包含你的上家/下家的其他角色。这些角色依次选择一项：⒈令你摸一张牌；⒉其摸一张牌。然后若选择选项一的角色数大于选项二的角色数，则你获得一枚“沙”；若选择选项二的角色数大于选项一的角色数，则你对这些角色依次造成1点伤害。",
	huaping: "化萍",
	huaping_info: "限定技。①一名其他角色死亡时，你可获得其当前拥有的所有不带有「Charlotte」标签的技能，然后你失去〖绡舞〗，移去所有“沙”并摸等量的牌。②当你死亡时，你可令一名其他角色获得〖沙舞〗和你的所有“沙”。",
	shawu: "沙舞",
	shawu_info: "当你使用【杀】指定目标后，你可选择一项：⒈弃置两张手牌；⒉移去一枚“沙”并摸两张牌。然后你对目标角色造成1点伤害。",
	dc_huangzu: "黄祖",
	dcjinggong: "精弓",
	dcjinggong_info: "你可以将一张装备牌当做无距离限制的【杀】使用。当你声明使用此【杀】后，你将此杀的伤害值基数改为X（X为你至此【杀】第一个目标角色的距离且至多为5）。",
	dcxiaojuan: "骁隽",
	dcxiaojuan_info: "当你使用牌指定其他角色为唯一目标后，你可以弃置其一半的手牌（向下取整）。若这些牌中有与你使用牌花色相同的牌，则你弃置一张手牌。",
	dc_liuyu: "新杀刘虞",
	dc_liuyu_prefix: "新杀",
	dcsuifu: "绥抚",
	dcsuifu_info: "其他角色的结束阶段开始时，若你和一号位本回合内累计受到过的伤害值大于1，则你可以将该角色的所有手牌置于牌堆顶，然后视为使用一张【五谷丰登】。",
	dcpijing: "辟境",
	dcpijing_info: "结束阶段开始时，你可以选择任意名角色。你令所有未选择的角色失去〖自牧〗，然后你和这些角色获得〖自牧〗。",
	dczimu: "自牧",
	dczimu_info: "锁定技。当你受到伤害后，你令所有拥有〖自牧〗的角色各摸一张牌，然后你失去〖自牧〗。",
	caohua: "曹华",
	caiyi: "彩翼",
	caiyi_info: "转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项。阴：⒈回复X点体力。⒉摸X张牌，⒊复原武将牌。⒋随机执行一个已经移除过的阴选项；阳：⒈受到X点伤害。⒉弃置X张牌。⒊翻面并横置。⒋随机执行一个已经移除过的阳选项。（X为该阴阳态剩余选项的数量）。",
	guili: "归离",
	guili_info: "你的第一个回合开始时，你须选择一名其他角色。该角色每轮的第一个回合结束后，若其本回合内未造成过伤害，则你执行一个额外的回合。",
	zhaoang: "赵昂",
	dczhongjie: "忠节",
	dczhongjie_info: "每轮限一次。当有角色因失去体力而进入濒死状态时，你可令其回复1点体力并摸一张牌。",
	dcsushou: "夙守",
	dcsushou_tag: "对方手牌",
	dcsushou_info: "一名角色的出牌阶段开始时，若其手牌数为全场唯一最多，则你可以失去1点体力并摸X张牌。然后若该角色不是你，则你可以观看其一半的手牌（向下取整），且用至多X张手牌替换其中等量的牌。（X为你已损失的体力值）",
	dc_wangchang: "王昶",
	dckaiji: "开济",
	dckaiji_info: "转换技。出牌阶段限一次，你可以：阴：摸X张牌；阳：弃置至多X张牌（X为你的体力上限且至多为5）。",
	dcpingxi: "平袭",
	dcpingxi_info: "结束阶段，若X大于0，则你可以选择至多X名其他角色（X为本回合内因弃置而进入弃牌堆的牌数）。你依次弃置这些角色的各一张牌，然后视为对这些角色使用一张【杀】。",
	liuhui: "刘徽",
	dcgeyuan: "割圆",
	dcgeyuan_info: "锁定技。①游戏开始时，你将从A至K的所有整数排列为一个环形链表，称为“圆环之理”。②当有一张牌进入弃牌堆后，若此牌的点数在“圆环之理”内，且“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你将此牌的点数记录进“圆环之弧”；然后若“圆环之弧”与“圆环之理”长度相同，则你从“圆环之理”中移除“圆环之弧”记录的第一个和最后一个数字A和B（当“圆环之理”长度不大于3时则不移除），清空“圆环之弧”，获得场上和牌堆中所有点数为A和B的牌。",
	dcjieshu: "解术",
	dcjieshu_info: "锁定技。①所有点数不在“圆环之理”中的牌不计入你的手牌上限。②当你使用或打出牌时，若“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你摸一张牌。",
	dcgusuan: "股算",
	dcgusuan_info: "觉醒技。一名角色的回合结束时，若你的“圆环之理”长度为3，则你减1点体力上限并修改〖割圆〗。",
	dcgeyuan_magica: "割圆·改",
	dcgeyuan_magica_info: "锁定技。当有一张牌进入弃牌堆后，若此牌的点数在“圆环之理”内，且“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你将此牌的点数记录进“圆环之弧”；然后若“圆环之弧”与“圆环之理”长度相同，则你清空“圆环之弧”并选择至多三名角色，这些角色中的第一名角色摸三张牌，第二名角色弃置四张牌，第三名角色将其手牌与牌堆底的五张牌交换。",
	zhangfen: "张奋",
	dcwanglu: "望橹",
	dcwanglu_info: "锁定技。准备阶段开始时，若你的装备区内：有【大攻车】，则你获得一个额外的出牌阶段；没有【大攻车】，则你将一张【大攻车】置入装备区。",
	dcxianzhu: "陷筑",
	dcxianzhu_info: "当你造成渠道为【杀】伤害后，你可以为你装备区内的【大攻车】选择一项强化（每张【大攻车】最多被强化五次）：⒈通过【大攻车】使用【杀】无视距离和防具；⒉通过此【大攻车】使用的【杀】可以额外选择1个目标（可叠加）；⒊通过此【大攻车】使用的【杀】造成伤害后的弃置牌数+1（可叠加）。",
	dcchaixie: "拆械",
	dcchaixie_info: "锁定技。当你的【大攻车】被销毁后，你摸X张牌（X为此【大攻车】被强化过的次数）。",
	dagongche: "大攻车",
	dagongche_skill: "大攻车",
	dagongche_info: "出牌阶段开始时，你可以视为使用一张【杀】，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其一张牌。若此【大攻车】未被强化，则其他角色无法弃置你装备区内的【大攻车】。当此牌离开你的装备区后，销毁之。",
	dukui: "杜夔",
	dcfanyin: "泛音",
	dcfanyin_info: "出牌阶段开始时，你可以亮出牌堆中点数最小的一张牌。然后你选择一项，并可以亮出一张点数为此牌二倍的牌且重复此流程：⒈使用此牌（无距离限制）；⒉你于本回合内使用的下一张基本牌或普通锦囊牌选择目标后，可以增加一个目标。",
	dcpeiqi: "配器",
	dcpeiqi_info: "当你受到伤害后，你可以移动场上的一张牌。然后若场上所有角色均在彼此的攻击范围内，则你可以再移动场上的一张牌。",
	quanhuijie: "全惠解",
	dchuishu: "慧淑",
	dchuishu_info: "摸牌阶段结束时，你可以摸[3]张牌。若如此做：你弃置[1]张手牌，且当你于本回合内弃置第[2]+1张牌后，你从弃牌堆中随机获得〖慧淑〗第三个括号数字张非基本牌。",
	dcyishu: "易数",
	dcyishu_info: "锁定技。当你不因出牌阶段而失去牌后，你同时令{〖慧淑〗的中括号内最小的一个数字+2}且{〖慧淑〗的中括号内最大的一个数字-1}。",
	dcligong: "离宫",
	dcligong_info: "觉醒技。准备阶段，若〖慧淑〗的中括号内有不小于5的数字，则你加1点体力上限，回复1点体力并失去〖易数〗。系统随机检索四张吴势力的女性武将牌，然后你选择一项：⒈摸三张牌。⒉失去〖慧淑〗，然后获得这些武将牌上的任意两个非Charlotte技能。",
	dingshangwan: "丁尚涴",
	dcfengyan: "讽言",
	dcfengyan_info: "出牌阶段每项各限一次。你可以：⒈令一名体力值不大于你的其他角色交给你一张手牌。⒉视为对一名手牌数不大于你的角色使用一张【杀】（无距离和次数限制）。",
	dcfudao: "抚悼",
	dcfudao_info: "游戏开始时，你选择一名其他角色，称为“继子”角色。当你或“继子”每回合首次使用牌指定对方为目标后，你与其各摸两张牌。当有角色杀死你或“继子”后，该角色称为“决裂”角色。当你或“继子”对“决裂”造成伤害时，此伤害+1。当你成为“决裂”角色使用的黑色牌的目标后，其本回合内不能再使用牌。",
	luyi: "卢弈",
	dcyaoyi: "邀弈",
	dcyaoyi_info: "锁定技。①游戏开始时，你令所有存活且未拥有转换技的角色获得〖手谈〗。②你发动〖手谈〗时无需弃置牌，且无次数限制。③所有拥有转换技的角色不能使用牌指定其他拥有转换技且双方所有转换技状态均相同的角色为目标。",
	dcfuxue: "复学",
	dcfuxue_info: "①准备阶段，你可以从弃牌堆中选择获得至多X张不因使用而进入弃牌堆的牌。②结束阶段，若你的手牌区中没有因〖复学①〗得到的牌，则你摸X张牌（X为你的体力值）。",
	dcshoutan: "手谈",
	dcshoutan_info: "转换技。出牌阶段限一次，阴：你可以弃置一张不为黑色的手牌。阳：你可以弃置一张黑色手牌。",
	dc_liuye: "刘晔",
	dcpoyuan: "破垣",
	dcpoyuan_info: "游戏开始时或准备阶段开始时，若你的装备区内：没有【霹雳投石车】，则你可以将一张【霹雳投石车】置入装备区；有【霹雳投石车】，则你可以弃置一名其他角色至多两张牌。",
	dchuace: "画策",
	dchuace_info: "出牌阶段限一次。你可以将一张手牌当做上一轮内未被使用过的普通锦囊牌使用。",
	pilitoushiche: "霹雳投石车",
	pilitoushiche_info: "锁定技。①你于回合内使用基本牌无距离限制，且当你于回合内使用基本牌时，你令此牌的牌面数值+1。②当你于回合外使用或打出基本牌时，你摸一张牌。③当此牌离开你的装备区时，销毁之。",
	zhaozhi: "赵直",
	dctongguan: "统观",
	dctongguan_info: "一名角色的第一个回合开始时，你为其选择一项属性（每个属性至多选两次，且仅对你可见）。",
	dcmengjie: "梦解",
	dcmengjie_info: "一名角色的回合结束时，若其本回合完成了其〖统观〗属性，你执行对应效果：<li>「武勇」造成伤害：对一名其他角色造成1点伤害；<li>「刚硬」回复体力，或于得到牌后手牌数大于体力值：令一名角色回复1点体力；<li>「多谋」于摸牌阶段外摸牌：摸两张牌；<li>「果决」弃置或获得其他角色的牌：弃置一名角色区域内至多两张牌；<li>「仁智」交给其他角色牌：令一名其他角色将手牌补至体力上限（至多摸五张）。",
	dctongguan_wuyong: "武勇",
	dctongguan_wuyong_info: "任务目标：造成伤害。",
	dctongguan_gangying: "刚硬",
	dctongguan_gangying_info: "任务目标：回复体力，或于得到牌后手牌数大于体力值。",
	dctongguan_duomou: "多谋",
	dctongguan_duomou_info: "任务目标：于摸牌阶段外摸牌。",
	dctongguan_guojue: "果决",
	dctongguan_guojue_info: "任务目标：弃置或获得其他角色的牌。",
	dctongguan_renzhi: "仁智",
	dctongguan_renzhi_info: "任务目标：交给其他角色牌。",
	zhujianping: "朱建平",
	olddcxiangmian: "相面",
	olddcxiangmian_info: "其他角色的结束阶段，你可以判定。然后你不能再对其发动此技能，其获得以下效果：当其使用第X张结果的花色的牌后（X为结果的点数），其失去等同于其体力值的体力。",
	dcxiangmian: "相面",
	dcxiangmian_info: "出牌阶段限一次。你可以令一名其他角色判定，然后你不能再对其发动此技能，其获得以下效果：当其使用结果的花色的牌后，或当其使用X张牌后（X为结果的点数），其失去等同于其体力值的体力。",
	dctianji: "天机",
	dctianji_info: "锁定技。当判定牌进入弃牌堆后，你从牌堆随机获得分别与该牌类型、花色和点数相同的牌各一张。",
	yuanji: "袁姬",
	dcmengchi: "蒙斥",
	dcmengchi_info: "锁定技。若你未于当前回合得到过牌：你不能使用牌；当你横置前，取消之；当你受到无属性伤害后，回复1点体力。",
	dcfangdu: "芳妒",
	dcfangdu_info: "锁定技。当你于回合外受到伤害后，若此次伤害为你于本回合受到的：第一次无属性伤害，你回复1点体力；第一次属性伤害，你随机获得伤害来源的一张手牌。",
	dcjiexing: "节行",
	dcjiexing_info: "当你受到伤害后、失去体力后或回复体力后，你可以摸一张牌，且此牌不计入本回合的手牌上限。",
	dongguiren: "董贵人",
	dclianzhi: "连枝",
	dclianzhi_info: "①游戏开始时，你选择一名其他角色（仅你可见）。②每回合限一次。当你进入濒死状态时，若〖连枝①〗角色存活，你回复1点体力并与其各摸一张牌。③当〖连枝①〗角色死亡后，你可以与一名其他角色各获得〖受责〗，且其获得与你拥有的等量枚“绞”标记（至少获得1枚）。",
	dclingfang: "凌芳",
	dclingfang_info: "锁定技。准备阶段，或当其他角色使用黑色牌结算结束后，若你是此牌的目标，或你使用黑色牌结算结束后，若你不是此牌目标，你获得1枚“绞”。",
	dcfengying: "风影",
	dcfengying_info: "①一名角色的回合开始时，你记录弃牌堆中所有黑色基本牌或黑色普通锦囊牌的牌名。②每回合每种牌名各限一次。你可以将一张点数不大于“绞”数的手牌当做任意一张〖风影①〗记录中的牌使用（无距离和次数限制）。",
	dcshouze: "受责",
	dcshouze_info: "锁定技。结束阶段，若你有“绞”，你弃1枚“绞”，随机获得弃牌堆中的一张黑色牌，失去1点体力。",
	chengbing: "程秉",
	dcjingzao: "经造",
	dcjingzao_info: "出牌阶段每名角色限一次，你可以选择一名其他角色并亮出牌堆顶三张牌，其选择一项：1.弃置一张牌名与这些牌的其中一张牌名相同的牌，然后你本回合发动〖经造〗亮出的牌数+1；2.令你随机获得这些牌中每种牌名的牌各一张，然后你本回合发动〖经造〗亮出的牌数-X（X为你获得的牌数）。",
	dcenyu: "恩遇",
	dcenyu_info: "锁定技。当你成为其他角色使用【杀】或普通锦囊牌的目标后，若你本回合成为过此牌名的牌的目标，此牌对你无效。",
	dc_zhouxuān: "周宣",
	dcwumei: "寤寐",
	dcwumei_info: "每轮限一次。回合开始时，你可以令一名角色记录场上所有角色的体力值并进行一个额外的回合，并将你的回合移至该回合后进行。该角色以此法进行的回合的结束阶段，将场上所有角色的体力值改为记录内的对应数值。",
	dczhanmeng: "占梦",
	dczhanmeng_info: "当你使用牌时，你可以选择本回合未选择过的一项：1.上一回合内，若没有同名牌被使用过，你获得一张非伤害牌；2.下一回合内，当同名牌首次被使用后，你获得一张伤害牌；3.令一名其他角色弃置两张牌，若点数之和大于10，你对其造成1点火焰伤害。",
	dc_wangyun: "新杀王允",
	dc_wangyun_prefix: "新杀",
	dclianji: "连计",
	dclianji_info: "出牌阶段限一次。你可以弃置一张手牌并选择一名其他角色，其随机使用牌堆中的一张武器牌，然后其选择一项：1.对另一名其他角色使用一张【杀】，并将武器牌交给其中一个目标；2.令你视为对其使用一张【杀】，并将武器牌交给你。",
	dcmoucheng: "谋逞",
	dcmoucheng_info: "觉醒技。准备阶段，若你发动过〖连计〗且两个选项均被选择过，你失去〖连计〗，然后获得〖矜功〗。",
	xuelingyun: "薛灵芸",
	dcxialei: "霞泪",
	dcxialei_info: "当你的红色牌进入弃牌堆后，或当你使用或打出的红色牌经由处理区进入弃牌堆后，你可以观看牌堆顶的三张牌，获得其中的一张牌，且可以将其余牌置于牌堆底。然后你本回合以此法观看的牌数-1。",
	dcanzhi: "暗织",
	dcanzhi_info: "出牌阶段或当你受到伤害后，你可以判定，若结果为红色，你重置〖霞泪〗的观看牌数；若结果为黑色，〖暗织〗于本回合失效，然后你可以令一名非当前回合角色获得本回合进入弃牌堆的两张牌。",
	yanghong: "杨弘",
	dcjianji: "间计",
	dcjianji_info: "出牌阶段限一次。你可以令至多X名座位连续的角色依次弃置一张牌。然后其中手牌数最多的角色可以视为对一名其他以此法弃置过牌的角色使用一张【杀】（X为你的攻击范围）。",
	dcyuanmo: "远谟",
	dcyuanmo_info: "①准备阶段或当你受到伤害后，你可以选择一项：1.攻击范围+1，然后若你攻击范围内的角色数因此增加，你可以获得任意名本次进入你攻击范围的角色各一张牌；2.攻击范围-1，然后摸两张牌。②结束阶段，若你的攻击范围内没有角色，你可以令你的攻击范围+1。",
	dc_yangbiao: "杨彪",
	dczhaohan: "昭汉",
	dczhaohan_info: "摸牌阶段，你可以多摸两张牌，然后你于得到牌后选择一项：1.将两张手牌交给一名没有手牌的角色；2.弃置两张手牌。",
	oldjinjie: "尽节",
	oldjinjie_info: "当一名角色进入濒死状态时，你可以令其摸一张牌。然后若你本轮未进行过回合，你可以弃置X张手牌令其回复1点体力（X为本轮你发动过〖尽节〗的次数）。",
	dcjinjie: "尽节",
	dcjinjie_info: "每轮限一次。当一名角色进入濒死状态时，你可以声明一个整数X（X∈[0,3]），令其摸X张牌，然后你可以弃置X张牌令其回复1点体力（若X为0则跳过摸牌和弃牌的步骤）。",
	oldjue: "举讹",
	oldjue_info: "准备阶段，你可以视为对一名体力值或手牌数大于你的角色使用一张【杀】。",
	dcjue: "举讹",
	dcjue_info: "每轮限一次。一名角色的结束阶段，你可以视为对其随机使用【杀】/【过河拆桥】/【五谷丰登】，直到你以此法使用的牌数不小于Y（Y为本回合因弃置进入弃牌堆的牌数，且至多为其体力上限）。若此时是你的回合，改为你选择一名其他角色。",
	dc_tengfanglan: "滕芳兰",
	dcluochong: "落宠",
	dcluochong_info: "一轮游戏开始时，你可以弃置任意名角色区域里的共计至多[4]张牌，然后若你以此法弃置了一名角色的至少三张牌，则你方括号内的数字-1。",
	dcaichen: "哀尘",
	dcaichen_info: "锁定技。若牌堆剩余数：大于80，当你因〖落宠〗弃置你区域内的牌后，你摸两张牌；大于40，你跳过弃牌阶段；小于40，你不能响应♠牌。",
	xielingyu: "谢灵毓",
	dcyuandi: "元嫡",
	dcyuandi_info: "当其他角色于其出牌阶段使用第一张牌时，若此牌仅指定其为目标，你可以选择一项：1.弃置其一张手牌；2.你与其各摸一张牌。",
	dcxinyou: "心幽",
	dcxinyou_info: "出牌阶段限一次。你可以将体力回复至上限并将手牌补至体力上限。若你以此法：获得了至少三张牌，你于结束阶段失去1点体力；回复了体力，你于结束阶段弃置一张牌。",
	zerong: "笮融",
	dccansi: "残肆",
	dccansi_info: "锁定技。准备阶段，你回复1点体力，然后选择一名其他角色，其回复1点体力，你视为对其依次使用以下能使用的牌：【杀】（无距离限制）、【决斗】、【火攻】。当其以此法受到1点伤害后，你摸两张牌。",
	dcfozong: "佛宗",
	dcfozong_info: "锁定技。出牌阶段开始时，若你的手牌数大于7，你将X张手牌置于武将牌上（X为你的手牌数-7）。然后若你的武将牌上有至少七张牌，其他角色依次选择一项：1.获得其中的一张牌并令你回复1点体力；2.令你失去1点体力。",
	dc_ruiji: "芮姬",
	dcwangyuan: "妄缘",
	dcwangyuan_info: "当你于回合外失去牌后，或于回合内发动〖俐影〗后，你可以随机将牌堆里的一张与你所有“妄”牌名均不同的基本牌或锦囊牌置于武将牌上，称为“妄”（不超过游戏人数）。",
	dclingyin: "铃音",
	// dclingyin_info:'出牌阶段开始时，你可以获得至多X张“妄”（X为游戏轮数）然后若你的“妄”颜色均相同，你于本回合对其他角色造成的伤害+1，且可以将一张武器牌或防具牌当【决斗】使用。',
	dclingyin_info: "出牌阶段开始时，你可以选择至多X张“妄”（X为游戏轮数），若这些牌以外的“妄”中不存在颜色不同的牌，则你于本回合对其他角色造成的伤害+1，且可以将一张武器牌或防具牌当【决斗】使用。你获得这些牌。",
	dcliying: "俐影",
	dcliying_info: "每回合限一次。当你于摸牌阶段外得到牌后，你可以将这些牌中的任意张交给一名其他角色，然后摸一张牌。",
	huanfan: "桓范",
	dcjianzheng: "谏诤",
	dcjianzheng_info: "出牌阶段限一次。你可以观看一名其他角色的手牌，然后若其中有你可以使用的手牌，你获得并使用其中一张。若你以此法使用牌指定了其为目标，你令你与其横置，然后其观看你的手牌。",
	dcfumou: "腹谋",
	dcfumou_info: "当你受到伤害后，你可以令至多X名角色从你开始逆时针依次选择一项：1.移动场上的一张牌；2.弃置所有手牌并摸两张牌；3.弃置装备区里的所有牌并回复1点体力（X为你已损失的体力值）。",
	chentai: "陈泰",
	dcctjiuxian: "救陷",
	dcctjiuxian_info: "出牌阶段限一次。你可以重铸一半数量的手牌（向上取整），然后视为使用一张【决斗】。当此牌对目标角色造成伤害后，你可以令其攻击范围内的一名其他角色回复1点体力。",
	dcchenyong: "沉勇",
	dcchenyong_info: "结束阶段，你可以摸X张牌（X为本回合你使用过的牌的类型数）。",
	sunyu: "孙瑜",
	dcquanshou: "劝守",
	dcquanshou_info: "一名角色的回合开始时，若其手牌数不大于其体力上限，你可以令其选择一项：1.将手牌摸至体力上限，然后本回合使用【杀】的次数上限-1（至多摸五张）；2.其本回合使用牌被抵消后，你摸一张牌。",
	dcshexue: "设学",
	dcshexue_info: "①出牌阶段开始时，你可以将一张牌当做上回合的角色于其出牌阶段内使用的一张基本牌或普通锦囊牌使用。②出牌阶段结束时，你可以令下回合的角色于其出牌阶段开始时可以将一张牌当做你于此阶段内使用的一张基本牌或普通锦囊牌使用（一名角色因〖设学〗使用的牌均无距离和次数限制）。",
	xizheng: "郤正",
	dcdanyi: "耽意",
	dcdanyi_info: "当你使用牌指定第一个目标后，你可以摸X张牌（X为此牌目标数与你使用的上一张牌相同的目标数）。",
	dcwencan: "文灿",
	dcwencan_info: "出牌阶段限一次。你可以选择至多两名体力值不同的其他角色，这些角色依次选择一项：1.弃置两张花色不同的牌；2.本回合你对其使用牌无距离和次数限制。",
	zhangjinyun: "张瑾云",
	dchuizhi: "蕙质",
	dchuizhi_info: "准备阶段，你可以选择是否弃置任意张手牌，然后将手牌摸至与全场手牌数最多的角色相同（至少摸一张，至多摸五张）。",
	dcjijiao: "继椒",
	dcjijiao_info: "限定技。出牌阶段，你可以令一名角色获得所有弃牌堆中你于本局游戏内使用或弃置过的普通锦囊牌，且这些牌不能被【无懈可击】响应。一名角色的回合结束后，若本回合牌堆洗过牌或有角色死亡，你重置〖继椒〗。",
	duanqiaoxiao: "段巧笑",
	dccaizhuang: "彩妆",
	dccaizhuang_info: "出牌阶段限一次，你可以弃置任意张牌。然后若你手牌中的花色数小于你以此法弃置的牌的花色数，你摸一张牌并重复此流程。",
	dchuayi: "华衣",
	dchuayi_info: "结束阶段，你可以判定，然后你获得如下效果直到你下回合开始时：红色，一名角色的回合结束时，你摸一张牌；黑色，当你受到伤害后，你摸两张牌。",
	wu_zhugeliang: "武诸葛亮",
	wu_zhugeliang_prefix: "武",
	dcjincui: "尽瘁",
	dcjincui_info: "锁定技。①游戏开始时，你将手牌摸至七张。②准备阶段，你将体力值回复或失去至等同于牌堆中点数为7的牌数（你的体力值最低因此调整至1）。然后你观看牌堆顶X张牌，将这些牌以任意顺序置于牌堆顶或牌堆底（X为你的体力值）。",
	dcqingshi: "情势",
	dcqingshi_info: "当你于出牌阶段使用牌时，若你手牌中有同名牌且你本回合未因此牌名的牌发动过该技能，你可以选择一项：1.令此牌对其中一个目标角色造成的伤害+1；2.令任意名其他角色各摸一张牌；3.摸三张牌，然后〖情势〗于本回合无效。",
	dczhizhe: "智哲",
	dczhizhe_clear: "invisible",
	dczhizhe_info: "限定技。出牌阶段，你可以选择一张手牌并复制之。当你使用或打出此复制牌结算结束后，你获得之，然后你本回合不能再使用或打出此牌。",
	ruanji: "阮籍",
	dczhaowen: "昭文",
	dczhaowen_tag: "昭文",
	dczhaowen_info: "出牌阶段开始时，你可以展示所有手牌。然后你于本回合获得如下效果：1.你可以将其中一张黑色牌当做任意一张普通锦囊牌使用（每回合每种牌名限一次）；2.当你使用其中的一张红色牌时，你摸一张牌。",
	dcjiudun: "酒遁",
	dcjiudun_info: "①以你为目标的【酒】（使用方法①）的作用效果改为“目标对应的角色使用的下一张【杀】的伤害基数+1”。②当你成为其他角色使用黑色牌的目标后，若你：未处于【酒】状态，你可以摸一张牌并视为使用一张【酒】；处于【酒】状态，你可以弃置一张手牌令此牌对你无效。",
	ganfurenmifuren: "甘夫人糜夫人",
	dcchanjuan: "婵娟",
	dcchanjuan_info: "每种牌名限两次。当你使用手牌中仅指定单一目标的【杀】或普通锦囊牌结算结束后，你可以视为使用一张名称和属性均相同的牌。若这两张牌指定的目标完全相同，你摸一张牌。",
	dcxunbie: "殉别",
	dcxunbie_info: "限定技。当你进入濒死状态时，你可以将此武将牌替换为“甘夫人”或“糜夫人”（不能选择已在场上的武将）。然后回复至1点体力并防止所有伤害直到本回合结束。",
	dc_mifuren: "糜夫人",
	dcguixiu: "闺秀",
	dcguixiu_info: "锁定技。①回合开始时，若你于本局游戏未发动过〖闺秀①〗，你摸两张牌。②当你发动〖存嗣〗后，你回复1点体力。",
	dccunsi: "存嗣",
	dccunsi_info: "限定技。出牌阶段，你可以令一名角色获得〖勇决〗。若该角色不为你，你摸两张牌。",
	dcyongjue: "勇决",
	dcyongjue_info: "当你于出牌阶段使用第一张【杀】时，你可以选择一项：1.令此【杀】不计入次数；2.获得此牌。",
	dc_ganfuren: "甘夫人",
	dcshushen: "淑慎",
	dcshushen_info: "当你回复1点体力后，你可以选择一名其他角色并选择一项：1.令其回复1点体力；2.你与其各摸一张牌。",
	dcshenzhi: "神智",
	dcshenzhi_info: "准备阶段，若你的手牌数大于体力值，你可以弃置一张手牌，然后回复1点体力。",
	dc_duyu: "杜预",
	dcjianguo: "谏国",
	dcjianguo_info: "出牌阶段各限一次。你可以选择一名角色并选择一项：1.令其摸一张牌，然后其弃置一半的手牌；2.令其弃置一张牌，然后其摸等同于手牌数一半的牌（均向上取整）。",
	dcdyqingshi: "倾势",
	dcdyqingshi_info: "当你于回合内使用【杀】或普通锦囊牌指定第一个目标后，若目标角色包括其他角色且此牌为你本回合使用的第X张牌，你可以对其中一名不为你的目标角色造成1点伤害（X为你的手牌数）。",
	sunlingluan: "孙翎鸾",
	dclingyue: "聆乐",
	dclingyue_info: "锁定技。一名角色于一轮内首次造成伤害后，你摸一张牌。若此时是该角色回合外，则改为摸X张牌（X为本回合全场造成的伤害值）。",
	dcpandi: "盻睇",
	dcpandi_info: "出牌阶段，你可以选择一名本回合内未造成过伤害的角色。你本阶段内使用的下一张牌改为以该角色为基准判断使用目标合法性，且使用者改为该角色。",
	zhoubuyi: "周不疑",
	dcshiji: "十计",
	dcshiji_info: "一名角色的结束阶段，若其本回合未造成过伤害，你可以声明一种本轮未以此法声明过的普通锦囊牌，然后其可以将一张牌当你声明的牌使用（其不是此牌的合法目标）。",
	dcsilun: "四论",
	dcsilun_info: "准备阶段或当你受到伤害后，你可以摸四张牌，然后将四张牌依次置于场上或牌堆两端（对所有角色可见）。装备区牌数因此变化的角色复原其武将牌。",
	dc_wangjun: "王濬",
	dcmianyao: "免徭",
	dcmianyao_info: "摸牌阶段结束时，你可以展示手牌中点数最小的一张牌并将此牌随机插入牌堆中。然后你于此回合结束时摸等同于此牌点数的牌。",
	dcchangqu: "长驱",
	dcchangqu_info: "出牌阶段限一次。你可以开一艘战舰（你从你的上家或下家开始选择任意名座位连续的其他角色，且起点角色获得“战舰”标记）。这些角色按照你选择的顺序依次执行：{若其有本次获得的“战舰”，其选择一项：1.交给你X张手牌，然后将“战舰”移动给你选择的下一名目标角色；2.令其下次受到的属性伤害值+X，然后横置（X为本次〖长驱〗中选项一被选择过的次数且至少为1）。}。",
	dctongye: "统业",
	dctongye_info: "锁定技。游戏开始时或一名角色死亡后，若场上势力数：不大于4，你的手牌上限+3；不大于3，你的攻击范围+3；不大于2，你使用【杀】的次数上限+3；不大于1，你摸牌阶段额定摸牌数+3。",
	tianshangyi: "田尚衣",
	dcposuo: "婆娑",
	dcposuo_info: "出牌阶段，若你本阶段未对其他角色造成过伤害，则你可以将一张你本阶段未以此法使用过的花色的手牌当作任意一张存在于游戏的同花色伤害牌使用。",
	dcxiaoren: "绡刃",
	dcxiaoren_info: "每回合限一次，当你造成伤害后，你可以进行判定，若结果为：红色，你可以令一名角色回复1点体力，然后若其满体力，其摸一张牌；黑色，你对受伤角色的上家或下家造成1点伤害，然后你可以重复此流程直到未能执行此项或有角色进入濒死状态。",
	dc_daxiaoqiao: "新杀大乔小乔",
	dc_daxiaoqiao_prefix: "新杀",
	dcxingwu: "星舞",
	dcxingwu_info: "弃牌阶段开始时，你可以将一张手牌置于武将牌上，称为“星舞”。若你的“星舞”牌达到三张，则你可移去三张“星舞”，弃置一名其他角色装备区里的所有牌，然后对其造成X点伤害（X为移去的“星舞”牌的花色数，若为女性角色则改为1点伤害）。",
	dcluoyan: "落雁",
	dcluoyan_info: "锁定技，若你有“星舞”牌，你视为拥有技能〖天香〗和〖流离〗。",
	dc_xiahouba: "新杀夏侯霸",
	dc_xiahouba_prefix: "新杀",
	old_huangfusong: "新杀皇甫嵩",
	old_huangfusong_prefix: "新杀",
	dc_sp_machao: "新杀SP马超",
	dc_sp_machao_prefix: "新杀SP",
	dc_shixie: "新杀士燮",
	dc_shixie_prefix: "新杀",
	dc_guansuo: "新杀关索",
	dc_guansuo_prefix: "新杀",
	dc_zhaoxiang: "新杀赵襄",
	dc_zhaoxiang_prefix: "新杀",
	dc_xujing: "许靖",
	dcshangyu: "赏誉",
	dcshangyu_tag: "赏誉",
	dcshangyu_info: "锁定技。游戏开始时，你获得一张【杀】并记录之，并可以将此牌交给一名角色。然后你获得如下效果：1.当一名角色使用此牌造成伤害后，你与其各摸一张牌；2.当此牌进入弃牌堆后，你将此牌交给一名本回合未以此法得到过此牌的角色。",
	dccaixia: "才瑕",
	dccaixia_info: "当你造成或受到伤害后，若你没有“瑕”，你可以摸至多X张牌并获得X枚“瑕”，然后当你使用牌时，移去1枚“瑕”（X为本局游戏总角色数且至多为5）。",
	wu_luxun: "武陆逊",
	wu_luxun_prefix: "武",
	dcxiongmu: "雄幕",
	dcxiongmu_tag: "雄幕",
	dcxiongmu_info: "①一轮游戏开始时，你可以将手牌摸至体力上限（若手牌数不小于体力上限则跳过），然后将任意张牌随机置入牌堆，从牌堆或弃牌堆中获得等量的点数为8的牌，且这些牌不计入手牌上限。②当你于一回合首次受到伤害时，若你的手牌数不大于你的体力值，此伤害-1。",
	dczhangcai: "彰才",
	dczhangcai_info: "当你使用或打出点数为8的牌时，你可以摸X张牌（X为你手牌区里点数为8的牌数且至少为1）。",
	dcruxian: "儒贤",
	dcruxian_info: "限定技。出牌阶段，你可以令你〖彰才〗的点数限制取消，且摸牌数改为等同于你手牌区内与此牌点数相同的牌数且至少为1，直到你的下回合开始。",
	malingli: "马伶俐",
	dclima: "骊马",
	dclima_info: "锁定技。你计算至其他角色的距离-X（X为场上的坐骑牌数且至少为1）。",
	dcxiaoyin: "硝引",
	dcxiaoyin_info: "①准备阶段，你可以亮出牌堆顶的Y张牌（Y为你距离1以内的角色数），获得其中的红色牌，将其中任意张黑色牌置于等量名座次连续的其他角色的武将牌上，称为“硝引”。②当一名有“硝引”牌的角色受到伤害时，若此伤害为：火焰伤害，来源可以弃置其“硝引”牌包含的类型的牌，将一张对应的“硝引”置入弃牌堆，令此伤害+1；非火焰伤害，来源可以获得一张“硝引”牌，将此伤害改为火焰伤害。",
	dchuahuo: "花火",
	dchuahuo_info: "出牌阶段限一次。你可以将一张红色手牌当不计入次数的火【杀】使用。然后当你使用此牌指定第一个目标后，若目标角色有“硝引”牌，你可以将此【杀】的目标改为所有有“硝引”牌的角色。",
	caoyi: "曹轶",
	dcmiyi: "蜜饴",
	dcmiyi_info: "准备阶段，你可以选择一项：1.回复1点体力；2.受到你造成的1点伤害。然后你令任意名角色执行该项。若如此做，这些角色于结束阶段执行另一项。",
	dcyinjun: "寅君",
	dcyinjun_info: "当你使用对应实体牌均为你的手牌的【杀】或锦囊牌结算结束后，若此牌目标为1，你可以视为对该目标使用一张无伤害来源的【杀】。然后若你本回合发动〖寅君〗的次数大于你的体力值，〖寅君〗失效直到回合结束。",
	zhugeruoxue: "诸葛若雪",
	dcqiongying: "琼英",
	dcqiongying_info: "出牌阶段限一次。你可以移动场上的一张牌，然后你弃置一张与此牌花色相同的手牌（若没有该花色的手牌则改为展示所有手牌）。",
	dcnuanhui: "暖惠",
	dcnuanhui_info: "结束阶段，你可以选择一名装备区有牌的角色，其可以视为依次使用X张基本牌（X为其装备区牌数且至少为1）。若其此次以此法使用了同名牌，其弃置装备区里的所有牌。",
	zhangjian: "张臶",
	dc_zj_a: "技能",
	dc_zj_a_info: "锁定技。当你受到牌造成的伤害时，若此牌有点数，则你将此伤害值改为此牌点数，否则你防止此伤害。",
	dc_zj_b: "技能",
	dc_zj_b_info: "结束阶段，你可以弃置所有牌并令一名其他角色获得〖技能〗直到你的下个回合开始。",
	dc_sb_lusu: "新杀谋鲁肃",
	dc_sb_lusu_prefix: "新杀谋",
	dcsbmingshi: "明势",
	dcsbmingshi_info: "摸牌阶段，你可以多摸两张牌，然后展示三张牌并令一名其他角色选择获得其中的一张牌。",
	dcsbmengmou: "盟谋",
	dcsbmengmou_info: "转换技，每回合每项各限一次，当你得到其他角色的牌后，或其他角色得到你的牌后：阴，你可以令该角色使用至多X张【杀】，且其每以此法造成1点伤害，其回复1点体力；阳，你可令该角色打出至多X张【杀】，然后其失去Y点体力。（X为你的体力上限，Y为X-其打出【杀】数）",
	dc_sb_zhouyu: "新杀谋周瑜",
	dc_sb_zhouyu_prefix: "新杀谋",
	dcsbronghuo: "融火",
	dcsbronghuo_info: "锁定技，当你使用火【杀】或【火攻】时，此牌伤害基值改为场上势力数。",
	dcsbyingmou: "英谋",
	dcsbyingmou_info: "转换技，每回合限一次，当你使用牌指定其他角色为目标后，你可以选择一名目标角色：阴，你将手牌数摸至与其相同（至多摸五张），然后视为对其使用一张【火攻】；阳，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）。",
	caoxian: "曹宪",
	dclingxi: "灵犀",
	dclingxi_info: "出牌阶段开始和结束时，你可以将至多X张牌称为“翼”置于你的武将牌上（X为你的体力上限）。当你失去武将牌上的“翼”时，你将手牌数调整至Y张（Y为你武将牌上的“翼”所含有的花色数的两倍）。",
	dczhifou: "知否",
	dczhifou_info: "当你使用牌结算完毕后，你可以移去至少X张武将牌上的“翼”（X为本回合此前发动此技能的次数+1），然后选择一名角色并选择一项令其执行（每个选项每回合限选择一次）：①将一张牌称为“翼”置于你的武将牌上；②弃置两张牌；③失去1点体力。",
	dc_qinghegongzhu: "新杀清河公主",
	dc_qinghegongzhu_prefix: "新杀",
	dczhangji: "长姬",
	dczhangji_info: "锁定技，一名角色使用多目标牌时，若你是此牌的目标之一，则你先结算此牌的效果，然后你摸X张牌（X为此牌的其他目标数）。",
	dczengou: "谮构",
	dczengou_info: "出牌阶段限一次，你可以将至多体力上限张牌称为“谮构”交给一名其他角色并摸等量张牌。若如此做，其下次体力值增加或使用牌结算完毕后，其展示所有手牌，然后失去Y点体力（Y为其手牌中的“谮构”牌数）。",
	bailingyun: "柏灵筠",
	dclinghui: "灵慧",
	dclinghui_info: "一名角色的结束阶段，若当前回合角色为你或本回合有角色进入过濒死状态，则你可以观看牌堆顶的三张牌，然后你可以使用其中一张牌并随机获得其中一张剩余牌。",
	dcxiace: "黠策",
	dcxiace_info: "每回合每项各限一次。当你造成/受到伤害后，你可以弃置一张牌并回复1点体力/令一名其他角色的非锁定技于本回合失效。",
	dcyuxin: "御心",
	dcyuxin_info: "限定技，一名角色进入濒死状态时，你可以令其将体力回复至X点（X为1，若该角色不为你则X为你的体力值）。",
	zhugemengxue: "诸葛梦雪",
	dcjichun: "寄春",
	dcjichun_info: "出牌阶段限一次，你可以展示一张牌并选择一项：①将此牌交给一名手牌数小于你的角色，然后摸X张牌。②弃置此牌并弃置一名手牌数大于你的角色区域里至多X张牌。（X为此牌牌名字数）",
	dchanying: "寒英",
	dchanying_info: "准备阶段，你可以亮出牌堆里的一张非赠物装备牌，然后令一名手牌数等于你的角色使用此牌。",
	huzun: "胡遵",
	dczhantao: "斩涛",
	dczhantao_info: "当你或你攻击范围内的角色受到伤害后，若你不为伤害来源，你可以判定，若造成此伤害的渠道为牌且此牌有点数且判定结果点数大于此牌的点数，你视为对来源使用一张【杀】。",
	dcanjing: "安境",
	dcanjing_info: "每回合限一次。当你造成伤害后，你可以令至多X名已受伤的角色各摸一张牌，然后其中体力值最少的角色回复1点体力（X为你本局游戏发动〖安境〗的次数）。",
	cuimao: "崔琰毛玠",
	zhengbi: "征辟",
	zhengbi_info: "出牌阶段开始时，你可以选择一名其他角色并选择一项：①本阶段结束时，若其本阶段得到过牌，则你获得其手牌区和装备区各一张牌；②将一张基本牌交给该角色，然后其交给你一张非基本牌或两张基本牌。",
	fengying: "奉迎",
	fengying_info: "限定技，出牌阶段，你可以弃置所有手牌。若如此做，你于本回合结束后进行一个额外回合，此额外回合开始时，若你的体力值为全场最低，则你将手牌数摸至体力上限。",
	lvfan: "吕范",
	diaodu: "调度",
	diaodu_info: "出牌阶段开始时，或当你发动〖典财〗后，你可以获得一名距离不大于1的一名角色A装备区里的一张牌，然后你将此牌交给另一名角色B，然后B选择是否使用此牌，若B使用/不使用，则你/B摸一张牌。",
	diancai: "典财",
	diancai_info: "其他角色的出牌阶段结束时，若你于此阶段失去了至少X张牌，则你可以将手牌摸至体力上限（X为你的体力值且X至多为5）。",
	chendong: "陈武董袭",
	dcduanxie: "断绁",
	dcduanxie_info: "出牌阶段限一次，你可以令一名其他角色横置，然后你横置。",
	dc_sb_simayi: "新杀谋司马懿",
	dc_sb_simayi_prefix: "新杀谋",
	dcsbquanmou: "权谋",
	dcsbquanmou_info: "转换技。出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。阴：当你于本阶段内下次对其造成伤害时，取消之；阳：当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。",
	dcsbpingliao: "平辽",
	dcsbpingliao_info: "锁定技。当你声明使用【杀】时，你令此【杀】的目标对其他角色不可见，且你令攻击范围内的其他角色依次选择是否打出一张红色基本牌。所有角色选择完成后，此牌的目标角色中没有以此法打出牌的角色本回合内无法使用或打出手牌；若有不为此牌目标的角色以此法打出了牌，则你摸两张牌，且你本回合使用【杀】的次数上限+1。",
	caofang: "曹芳",
	dczhimin: "置民",
	dczhimin_tag: "民",
	dczhimin_info: "锁定技。①一轮游戏开始时，你选择至多X名其他角色（X为你的体力值），获得这些角色各自手牌中的随机一张点数最小的牌。②当你于你的回合外得到牌后，你将这些牌标记为“民”。③当你失去“民”后，你将手牌补至体力上限。",
	dcjujian: "拒谏",
	dcjujian_info: "主公技。出牌阶段限一次，你可以令一名其他魏势力角色摸一张牌，然后你令其于本轮内使用的普通锦囊牌对你无效。",
	wu_guanyu: "武关羽",
	wu_guanyu_prefix: "武",
	dcjuewu: "绝武",
	dcjuewu_two: "2点",
	dcjuewu_info: "①每回合每种牌名限一次。你可以将一张点数为2的牌当任意伤害类牌使用（包括【水淹七军】）。②当你得到其他角色区域内的牌后，你令这些牌的点数均视为2直到你失去这些牌。",
	dcwuyou: "武佑",
	dcwuyou_info: "①出牌阶段限一次。你可以选择一张手牌，从系统随机生成的五个非装备牌牌名中选择一个，令此牌的牌名与属性视为与你选择的相同。②其他角色的出牌阶段限一次。其可以交给你一张手牌，你从系统随机生成的五个非装备牌牌名中选择一个，然后可以交给其一张手牌，令此牌的牌名与属性视为与你选择的相同（一名角色使用〖武佑〗转化的牌无距离且无任何次数限制）。",
	dcyixian: "义贤",
	dcyixian_info: "限定技。出牌阶段，你可以选择一项：⒈获得场上的所有装备牌；⒉获得弃牌堆中的所有装备牌。然后你依次选择是否令被你以此法获得牌的角色摸X张牌并回复1点体力（X为其以此法失去的牌数）。",
	shuiyanqijuny: "水淹七军",
	shuiyanqijuny_info: "出牌阶段，对至多两名角色使用。目标角色受到1点雷属性伤害，然后若其：是此牌的使用者选择的第一个目标，其弃置一张牌；不是第一个目标，其摸一张牌。",
	sp_zhenji: "SP甄宓",
	sp_zhenji_prefix: "SP",
	dcjijie: "己诫",
	dcjijie_info: "锁定技。每回合每项各限一次，其他角色于其回合外得到牌后/回复体力后，你摸等量的牌/回复等量的体力。",
	dchuiji: "惠济",
	dchuiji_info: "出牌阶段限一次。你可以令一名角色摸两张牌或从牌堆中随机使用一张不为赠物的装备牌，然后若其手牌数不小于存活角色数，其视为使用一张【五谷丰登】。系统不于此牌使用准备工作结束时执行亮出牌堆顶的牌的动作，改为你令其将所有手牌置于处理区，然后令所有目标角色依次获得其中一张牌。当这些牌因执行【五谷丰登】的执行动作而置于弃牌堆后，你令其获得这些牌。",
	guanyue: "关樾",
	dcshouzhi: "守执",
	dcshouzhi_info: "锁定技。一名角色的回合结束时，若你的手牌数：大于本回合开始时的手牌数，你弃置一张手牌；小于本回合开始时的手牌数，你摸两张牌。",
	dcshouzhi_modified: "守执·改",
	dcshouzhi_modified_info: "一名角色的回合结束时，若你的手牌数：大于本回合开始时的手牌数，你可以弃置一张手牌；小于本回合开始时的手牌数，你可以摸两张牌。",
	dcfenhui: "奋恚",
	dcfenhui_info: "限定技。出牌阶段，你可以令一名角色获得X枚“恨”标记，你摸等量的牌（X为本局游戏你使用牌指定其为目标的次数，至多为5）。你获得如下效果：⒈当其受到伤害时，你移去其1枚“恨”，令此伤害+1；⒉当其死亡时，若其有“恨”，你减1点体力上限，修改〖守执〗并获得〖兴门〗。",
	dcxingmen: "兴门",
	dcxingmen_info: "①当你因〖守执〗弃置而失去牌后，你可以回复1点体力。②当你因摸牌而得到牌后，若牌数不小于2且其中有红色牌，则你使用其中的红色牌时不能被响应。",
	dc_sb_jiaxu: "新杀谋贾诩",
	dc_sb_jiaxu_prefix: "新杀谋",
	dcsbsushen: "肃身",
	dcsbsushen_info: "限定技，出牌阶段，你可以记录你当前〖覆谋〗的状态、你的手牌数和你的体力值，然后获得技能〖入世〗。",
	dcsbrushi: "入世",
	dcsbrushi_info: "限定技，出牌阶段，你可以将你当前〖覆谋〗的状态、你的手牌数和你的体力值调整为你发动〖肃身〗时的记录，然后重置〖覆谋〗的发动次数。",
	dcsbfumou: "覆谋",
	dcsbfumou_info: "转换技，出牌阶段限一次，你可以观看一名其他角色A的手牌并展示其一半手牌：阴，并将这些牌交给另一名其他角色B，然后你与A各摸X张牌（X为A以此法失去的手牌数）；阳，令A依次使用这些牌中所有其可以使用的牌（无距离限制且不可被响应）。",
	dc_sb_zhugejin: "新杀谋诸葛瑾",
	dc_sb_zhugejin_prefix: "新杀谋",
	dcsbtaozhou: "讨州",
	dcsbtaozhou_info: "出牌阶段，你可以选择一名有手牌的其他角色并从1/2/3中选择一个数字X，其可以选择是否交给你至多三张手牌。若其交给你的牌数Y：不小于X，则你与其各摸一张牌；小于X，则其下Z次受到的伤害+1（Z为X与Y之差）。若Z不小于2，则其获得〖自矜〗并视为对你使用一张【杀】。然后此技能失效直到下X轮游戏开始时。",
	dcsbhoude: "厚德",
	dcsbhoude_info: "当你于其他角色的出牌阶段内首次成为红色【杀】/黑色普通锦囊牌的目标后，你可以弃置你/其的一张牌，令此牌对你无效。",
	dcsbzijin: "自矜",
	dcsbzijin_info: "锁定技。①你不能成为〖讨州〗的目标。②当你使用牌结算结束后，若此牌未造成过伤害，你须弃置一张牌或失去1点体力。",
	dc_wangling: "新杀谋王淩",
	dc_wangling_prefix: "新杀谋",
	dc_simashi: "新杀谋司马师",
	dc_simashi_prefix: "新杀谋",
	dc_caoshuang: "新杀谋曹爽",
	dc_caoshuang_prefix: "新杀谋",
	dc_jiangji: "新杀谋蒋济",
	dc_jiangji_prefix: "新杀谋",
	dc_sb_caoang: "新杀谋曹昂",
	dc_sb_caoang_prefix: "新杀谋",
	dcsbfengmin: "丰愍",
	dcsbfengmin_info: "锁定技，一名角色于其回合内失去装备区的牌后，你摸等同于其装备区空缺装备栏数的牌，然后若你发动〖丰愍〗的次数大于你的已损失体力值，〖丰愍〗于本回合失效。",
	dcsbzhiwang: "质亡",
	dcsbzhiwang_info: "每回合限一次，当你因受到牌造成的伤害进入濒死状态时，你可以将此伤害改为无来源并选择一名其他角色，其于本回合结束时可以使用本回合令你进入濒死状态的牌。",
	dc_sb_dianwei: "新杀谋典韦",
	dc_sb_dianwei_prefix: "新杀谋",
	dcsbkuangzhan:"狂战",
	dcsbkuangzhan_info:"出牌阶段限一次，你可以将手牌摸至体力上限并进行X次拼点。若你赢，你视为对所有本回合拼点未赢的其他角色使用一张【杀】；若你未赢，视为其对你使用一张【杀】。（X为你以此法获得的牌数）",
	dcsbkangyong:"亢勇",
	dcsbkangyong_info:"锁定技，回合开始时，你回满体力；回合结束时，你失去等量体力（至少保留1点）。",
	dc_sb_guanping: "新杀谋关平",
	dc_sb_guanping_prefix: "新杀谋",
	dcsbwuwei: "武威",
	dcsbwuwei_info: "出牌阶段限一次，你可以将一种颜色的所有手牌当作无距离和次数限制的【杀】使用，然后你选择X次执行以下项（X为转化为此【杀】的牌的类别数）：①摸一张牌；②令目标角色本回合非锁定技失效；③令本回合〖武威〗可发动次数+1。然后若你选择了所有项，则此【杀】造成的伤害+1。",
	dc_sb_zhangxiu: "新杀谋张绣",
	dc_sb_zhangxiu_prefix: "新杀谋",
	dcsbfuxi: "附袭",
	dcsbfuxi_info: "其他角色的出牌阶段开始时，若其手牌数为全场最多，则你可以选择一项：①交给其一张牌，然后摸两张牌；②弃置其一张牌，然后视为对其使用一张【杀】。",
	dcsbhaoyi: "豪意",
	dcsbhaoyi_info: "结束阶段，你可以获得本回合进入弃牌堆的所有未造成过伤害的伤害牌，然后你可以将这些牌任意分配给其他角色。",
	zhupeilan: "朱佩兰",
	dccilv: "辞虑",
	dccilv_info: "当你成为普通锦囊牌的目标后，你可以摸剩余选项数的牌，然后若你的手牌数大于你的体力上限，则你选择执行并移去一项：①令此牌对你无效；②防止此牌对你造成的伤害；③于此牌结算完毕后获得此牌对应的所有实体牌。",
	dctongdao: "痛悼",
	dctongdao_info: "限定技，当你进入濒死状态时，你可以选择一名角色，令其将其拥有的技能重置至游戏开始时的状态，然后若其不为你，则你将体力值回复至与其相同。",
};

export default translates;
