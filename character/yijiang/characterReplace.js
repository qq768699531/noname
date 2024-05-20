const characterReplaces = {
	caozhi: ["caozhi", "dc_caozhi", "re_caozhi", "ps_caozhi"],
	zhangchunhua: ["zhangchunhua", "re_zhangchunhua"],
	yujin: ["yujin", "yujin_yujin", "ol_yujin", "sb_yujin", "xin_yujin", "re_yujin"],
	dc_xushu: ["re_xushu", "dc_xushu"],
	xushu: ["xin_xushu", "xushu"],
	fazheng: ["xin_fazheng", "ol_fazheng", "re_fazheng", "sb_fazheng", "tw_re_fazheng", "fazheng"],
	masu: ["xin_masu", "re_masu", "masu"],
	xusheng: ["xusheng", "xin_xusheng", "re_xusheng", "old_xusheng"],
	wuguotai: ["wuguotai", "xin_wuguotai", "re_wuguotai"],
	lingtong: ["lingtong", "xin_lingtong", "ol_lingtong", "re_lingtong", "old_lingtong"],
	gaoshun: ["gaoshun", "xin_gaoshun", "ol_gaoshun", "re_gaoshun", "sb_gaoshun", "old_gaoshun"],
	zhonghui: ["zhonghui", "xin_zhonghui", "re_zhonghui", "old_zhonghui", "pe_zhonghui"],
	wangyi: ["wangyi", "ol_wangyi", "re_wangyi", "old_wangyi"],
	caozhang: ["caozhang", "ol_caozhang", "re_caozhang", "xin_caozhang"],
	guanzhang: ["guanzhang", "re_guanzhang", "old_guanzhang"],
	madai: ["old_madai", "re_madai", "tw_madai", "madai"],
	liaohua: ["liaohua", "re_liaohua", "xin_liaohua"],
	bulianshi: ["bulianshi", "dc_bulianshi", "re_bulianshi", "old_bulianshi"],
	handang: ["handang", "xin_handang", "re_handang", "tw_handang", "old_handang"],
	chengpu: ["chengpu", "ol_chengpu", "re_chengpu", "xin_chengpu", "tw_chengpu", "ns_chengpu"],
	liubiao: ["liubiao", "xin_liubiao", "re_liubiao", "sb_liubiao", "oldre_liubiao", "old_liubiao"],
	manchong: ["manchong", "re_manchong"],
	caochong: ["caochong", "re_caochong", "old_caochong"],
	guohuai: ["guohuai", "re_guohuai", "xin_guohuai", "tw_guohuai", "ol_guohuai"],
	jianyong: ["jianyong", "ol_jianyong", "re_jianyong", "xin_jianyong"],
	panzhangmazhong: ["panzhangmazhong", "re_panzhangmazhong", "xin_panzhangmazhong"],
	yufan: ["yufan", "ol_yufan", "xin_yufan", "re_yufan"],
	zhuran: ["zhuran", "re_zhuran", "xin_zhuran", "old_zhuran"],
	liru: ["xin_liru", "dc_liru", "re_liru", "yj_liru", "+liru"],
	fuhuanghou: ["fuhuanghou", "re_fuhuanghou", "xin_fuhuanghou", "old_fuhuanghou"],
	chenqun: ["chenqun", "dc_chenqun", "re_chenqun", "old_chenqun"],
	hanhaoshihuan: ["hanhaoshihuan", "re_hanhaoshihuan"],
	caozhen: ["caozhen", "re_caozhen", "xin_caozhen", "old_caozhen"],
	wuyi: ["wuyi", "re_wuyi", "xin_wuyi", "dc_wuyi"],
	sunluban: ["re_sunluban", "xin_sunluban", "sunluban"],
	zhuhuan: ["re_zhuhuan", "xin_zhuhuan", "zhuhuan", "old_zhuhuan"],
	caoxiu: ["caoxiu", "re_caoxiu", "xin_caoxiu", "tw_caoxiu", "old_caoxiu"],
	xiahoushi: ["xiahoushi", "re_xiahoushi", "sb_xiahoushi"],
	zhangyi: ["zhangyi", "re_zhangyi", "xin_zhangyi"],
	quancong: ["quancong", "re_quancong", "xin_quancong", "old_quancong"],
	sunxiu: ["sunxiu", "re_sunxiu", "xin_sunxiu"],
	zhuzhi: ["zhuzhi", "re_zhuzhi", "xin_zhuzhi", "old_zhuzhi"],
	liuyu: ["liuyu", "dc_liuyu", "ol_liuyu"],
	zhangrang: ["zhangrang", "ol_zhangrang", "junk_zhangrang"],
	jikang: ["jikang", "re_jikang", "dc_jikang"],
	xinxianying: ["xinxianying", "re_xinxianying", "ol_xinxianying", "sp_xinxianying"],
	gongsunyuan: ["gongsunyuan", "re_gongsunyuan"],
	zhoucang: ["zhoucang", "re_zhoucang", "xin_zhoucang"],
	guotufengji: ["guotufengji", "re_guotufengji"],
	guanping: ["guanping", "re_guanping"],
	caifuren: ["caifuren", "re_caifuren", "xin_caifuren"],
	guyong: ["guyong", "re_guyong", "xin_guyong", "tw_guyong"],
	yj_jushou: ["yj_jushou", "re_jushou", "xin_jushou"],
	guohuanghou: ["guohuanghou", "re_guohuanghou"],
	liuchen: ["liuchen", "re_liuchen"],
	liufeng: ["liufeng", "re_liufeng"],
	sundeng: ["sundeng", "re_sundeng", "ns_sundeng"],
	caiyong: ["caiyong", "re_caiyong"],
	chengong: ["chengong", "re_chengong", "sb_chengong"],
	xunyou: ["xunyou", "re_xunyou", "clan_xunyou"],
	xuezong: ["xuezong", "tw_xuezong"],
	huanghao: ["huanghao", "dc_huanghao", "old_huanghao"],
	caorui: ["caorui", "re_caorui", "old_caorui"],
	sunziliufang: ["sunziliufang", "dc_sunziliufang"],
	liyan: ["liyan", "old_liyan"],
	zhangsong: ["zhangsong", "re_zhangsong"],
	zhongyao: ["zhongyao", "re_zhongyao"],
	liwan: ["ol_liwan", "liwan"],
	wuxian: ["wuxian", "clan_wuxian"],
	simafu: ["simafu", "yj_simafu"],
	xuangongzhu: ["yj_xuangongzhu", "xuangongzhu"],
};

export default characterReplaces;
