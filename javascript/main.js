var cards = $('.card');

var druid = $(".druid");
var hunter = $(".hunter");
var mage = $(".mage");
var paladin = $(".paladin");
var priest = $('.priest');
var rogue = $('.rogue');
var shaman = $('.shaman');
var warrior = $('.warrior');
var warlock = $('.warlock');

var spell = $('.spell');
var minion = $('.minion');
var weapon = $('.weapon');

var basic = $('.basic');
var classic = $('.classic');
var BRM = $('.BRM');
var GVG = $('.GVG');
var Naxx = $('.Naxx');
var TGT = $('.TGT');

var mana_0 = $('.0_mana');
var mana_1 = $('.1_mana');
var mana_2 = $('.2_mana');
var mana_3 = $('.3_mana');
var mana_4 = $('.4_mana');
var mana_5 = $('.5_mana');
var mana_6 = $('.6_mana');
var mana_7 = $('.7_mana');
var mana_8 = $('.8_mana');
var mana_9 = $('.9_mana');
var mana_10 = $('.10_mana');

var attack_0 = $('.0_attack');
var attack_1 = $('.1_attack');
var attack_2 = $('.2_attack');
var attack_3 = $('.3_attack');
var attack_4 = $('.4_attack');
var attack_5 = $('.5_attack');
var attack_6 = $('.6_attack');
var attack_7 = $('.7_attack');
var attack_8 = $('.8_attack');
var attack_9 = $('.9_attack');
var attack_10 = $('.10_attack');

var health_1 = $('.1_health');
var health_2 = $('.2_health');
var health_3 = $('.3_health');
var health_4 = $('.4_health');
var health_5 = $('.5_health');
var health_6 = $('.6_health');
var health_7 = $('.7_health');
var health_8 = $('.8_health');
var health_9 = $('.9_health');
var health_10 = $('.10_health');

function showCategory(category){
	cards.hide();
	category.show();
}

$('#minion-btn').click(function() {
	showCategory(minion);
});
$('#spell-btn').click(function() {
	showCategory(spell);
});
$('#weapon-btn').click(function() {
	showCategory(weapon);
});