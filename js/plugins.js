// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"KGN_HitMinusEva","status":true,"description":"最終的な命中率を「命中率 - 回避率」にします。","parameters":{}},
{"name":"WeaponSkill","status":true,"description":"武器ごとに通常攻撃のスキルIDを変更します。","parameters":{}},
{"name":"Torigoya_InputNamePrompt","status":true,"description":"名前入力ダイアログ機能を追加します","parameters":{"Max Length":"10","Message":"あなたの名前は？","Maximum Message":"(%1 文字以内で入力)"}},
{"name":"EventSelector","status":true,"description":"コモンイベントを選択するウィンドウを表示します。","parameters":{}},
{"name":"OverpassTile","status":true,"description":"キャラクターが下をくぐり抜けられる橋の設定です。","parameters":{"Overpass Region ID":"255","Gateway Region ID":"254"}},
{"name":"Gacha","status":false,"description":"ランダムにアイテムを取得します。","parameters":{"Help Message Text":"1回Required Amount\\Gでガチャを引きます","Button Text":"ガチャを引く","Get Message Text":"GET Item Name","Show Item Description":"0","Effect":"119","Rank1 Effect":"-1","Rank2 Effect":"-1","Rank3 Effect":"-1","Rank4 Effect":"-1","Rank5 Effect":"-1","ME":"Organ","Required Amount":"100"}},
{"name":"GachaBook","status":false,"description":"ガチャアイテム一覧を表示します。","parameters":{"Unknown Data":"??????","Price Text":"Price","Equip Text":"Equip","Type Text":"Type","Rank Text":"Rank","Simple Display":"0"}},
{"name":"TinyGetInfoWnd","status":true,"description":"アイテムの入手/消失を小さなウィンドウで表示します。(Ver1.1.1)","parameters":{"Event Command Switch":"5","Y position type":"0","Window Duration":"200","Display Loss":"0","Display at Battle":"0","textGainItem":"%1を入手。","textLoseItem":"%1を失った。","wordMoney":"ドル","iconMoney":"360","Item SE filename":"Magic1","Item SE volume":"100","Item SE pitch":"100","Weapon SE filename":"Magic1","Weapon SE volume":"100","Weapon SE pitch":"100","Armor SE filename":"Magic1","Armor SE volume":"100","Armor SE pitch":"100","Money SE filename":"Coin","Money SE volume":"100","Money SE pitch":"100"}},
{"name":"KeyItemNumber","status":true,"description":"「大事なもの」の個数表示の設定","parameters":{"KeyItem":"0","MessageWindow":"0"}},
{"name":"TouchUI","status":true,"description":"UIをタッチ操作に適したものへ変更します。","parameters":{"Menu Command Text":"メニュー","Previous Command Text":"前","Next Command Text":"次"}},
{"name":"QuestList","status":true,"description":"クエストリストを管理するプラグイン","parameters":{"offSwitchDuringProcessing":"5","setSuffix":"\\nを受けました。","successSuffix":"\\nを達成しました！","failedSuffix":"\\nに失敗しました...","questTextColor":"21","setQuestSe":"Decision1","setQuestSeVolume":"100","successQuestSe":"Heal3","successQuestSeVolume":"100","failedQuestSe":"Darkness2","failedQuestSeVolume":"100"}},
{"name":"HPConsumeSkill","status":true,"description":"HP消費技","parameters":{}},
{"name":"LastUsedItem","status":false,"description":"最後に使用されたスキルかアイテムのIDを変数に格納します。","parameters":{"Variable ID 1":"0","Variable ID 2":"0"}},
{"name":"ScreenResolution","status":false,"description":"ゲームスクリーンの解像度を好きなように変更することができます","parameters":{"Screen Width":"816","Screen Height":"624"}},
{"name":"TDDP_PreloadManager","status":false,"description":"マップ/シーン切り替え時、またブート時に素材の事前ロードを行います。","parameters":{"Preload System SFX":"true","Print Debug to Console":"false"}},
{"name":"YEP_AutoPassiveStates","status":false,"description":"アクター、敵、スキル、装備のステートをパッシブにできます","parameters":{}},
{"name":"YEP_BaseTroopEvents","status":false,"description":"全ての敵グループに対して、\r\n毎回戦闘で発生するイベントを設定します。","parameters":{"Base Troop ID":"1"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"リージョンを用いて、イベントおよびプレイヤーの移動制限を行います。","parameters":{"Player Restrict":"0","Event Restrict":"0","All Restrict":"0","Player Allow":"0","Event Allow":"0","All Allow":"0"}},
{"name":"CustomizeBasicSystemRate","status":true,"description":"基本システムの倍率調整用プラグイン","parameters":{"criticalDamageRate":"1.50","buffRate":"0.20","damagedStandardTP":"10","bentchMemberExpRate":"1.00","escapeBasicRateVariable":"","escapeAdjustRate":"1.00"}},
{"name":"CriticalCorrection","status":false,"description":"ver1.00/アイテムやスキルで個別にクリティカル率の修正を行います。","parameters":{}},
{"name":"YEP_MessageCore","status":true,"description":"v1.11 メッセージの表示方法や機能をカスタマイズすることができます。","parameters":{"---一般---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","---フォント---":"","Font Name":"GameFont","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.50 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"130","Reflect Animation":"0","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"false","Window Rows":"5","Command Window Rows":"5","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"ユーザー","Ally Help Text":"味方","Allies Help Text":"味方","Enemy Help Text":"敵","Enemies Help Text":"敵","All Help Text":"%1全体","Random Help Text":"ランダムな %1 %2体","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"true","Enemy Font Size":"24","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"false","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.07 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"バトルリザルト","Battle Drops Text":"取得物","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"false","Gained EXP Text":"獲得経験値","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_AftermathLevelUp","status":true,"description":"v1.01 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"%1はレベル%2になった！","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"覚えたスキル","Skill Text Plural":"覚えたスキル","Skill List Width":"200"}},
{"name":"MOT_ScriptCommandExtension","status":true,"description":"イベントのスクリプト拡張 Ver.1.2","parameters":{}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"Battle Engine Coreに対する拡張プラグインです","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"Battle Engine Coreのアクションシーケンスに視覚的な\n機能を追加します。(YEP_BattleEngineCore.jsが必要です)","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":true,"description":"Battle Engine Coreのアクションシーケンスに、カメラ制御\nの機能を追加します。(YEP_BattleEngineCore.jsが必要です)","parameters":{"Camera Option":"Battle Camera"}},
{"name":"MPP_HiddenPassage","status":true,"description":"【ver.2.1】指定したリージョンIDのタイルをプレイヤーより上に表示させます。","parameters":{"Passable Upper Region Ids":"32","Impassable Upper Region Ids":"33","=== Command ===":"【コマンド関連】","Plugin Commands":"{\"SetPlayerZ\":\"SetPlayerZ\"}"}},
{"name":"CharacterGraphicExtend","status":true,"description":"キャラクターグラフィック表示拡張プラグイン","parameters":{"イベント消去無効":"false"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.09 スキルシステムにより多くの機能を実装し、\r\nコストの設定などができるようになります。","parameters":{"---一般---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP消費---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP消費---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"スキルが連続で使われるのを防ぐため、\nクールダウンのシステムを導入できます。","parameters":{"---クールダウン---":"","Cooldown Format":"%1CD","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"-10","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","---ウォームアップ---":"","Warmup Format":"%1WU","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.04 モーション付のサイドビューアクターを、敵にも用いることができます(使用にはYEP_BattleEngineCore.jsが必要です)","parameters":{"---一般---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","---影---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---呼吸---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.01","HP Link Breathing":"false","---浮遊---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","---モーション---":"","Attack Motion":"thrust","Weapon Image Index":"0","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---武器---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"EnemyBook","status":true,"description":"モンスター図鑑です。敵キャラの詳細なステータスを表示します。","parameters":{"Unknown Data":"？？？？？？"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (要YEP_BattleEngineCore.js) バトラーが選択されたとき、または戦闘でダメージを受けたときにHPゲージを表示します。","parameters":{"---一般---":"","Display Actor":"false","Defeat First":"false","Always Visible":"false","---外観---":"","Minimum Gauge Width":"120","Gauge Height":"18","Back Color":"19","HP Color 1":"24","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---テキスト表示---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"KGN_DelEquipCommand","status":false,"description":"最強装備とかのコマンドを無くします。","parameters":{}},
{"name":"TMOmitShopCommand","status":true,"description":"購入または売却のみの場合にショップコマンドを省略します。","parameters":{}},
{"name":"TMOmitEquipCommand","status":true,"description":"装備シーンからコマンドウィンドウを削除し、\nスロットウィンドウに２行分のスペースを追加します。","parameters":{"useOptimize":"false","useClear":"false"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.21 ゲーム内やアイテムシーン内でのアイテムの処理を変更します","parameters":{"---一般---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---アイテムシーン---":"","Updated Scene Item":"false","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 回復","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"%1 を使う","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_EquipCore","status":false,"description":"v1.18 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"終了","Remove Text":"外す","Remove Icon":"16","Empty Text":"<空き>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5 6"}},
{"name":"YEP_X_EquipCustomize","status":false,"description":"v1.02 (Requires YEP_ItemCore && YEP_EquipCore.js)\nAdds a 'Customize' command to the Equip menu.","parameters":{"Command Name":"Customize","Default Enable":"true"}},
{"name":"InfoWindow","status":false,"description":"情報表示ウィンドウをメニュー画面に追加するプラグイン","parameters":{"isOnlineSwitch":"6"}},
{"name":"DataCacheBlocker","status":true,"description":"キャッシュを阻止します。（dataフォルダのみ）","parameters":{}},
{"name":"shopInfo","status":true,"description":"ショップで装備品を購入する際、詳細な情報を\r\n表示することができます","parameters":{}},
{"name":"DestinationWindow","status":true,"description":"行動目標ウィンドウプラグイン","parameters":{"表示スイッチID":"6","イベント中は閉じる":"true","ウィンドウX座標":"24","ウィンドウY座標":"24","ウィンドウ横幅":"320","ウィンドウ不透明度":"255","ウィンドウスキン名":"","フェード時間":"12","フォントサイズ":"18","メニュー画面に表示":"false","自働調整":"true","表示フレーム数":"0","文字列揃え":"0","NoDestinationWindowMapIds":"[]"}},
{"name":"TsumioMenuSystem","status":false,"description":"メニュー画面を改造するプラグインです。","parameters":{"----基本的な設定----":"","メニューの行数":"2","メニューの最大列数":"5","ステータスの最大列数":"4","章ウィンドウを表示する":"true","章ウィンドウの高さ":"70","ステータスウィンドウの高さ":"290","顔グラフィックのサイズ":"{\"width\":\"105\",\"height\":\"30\"}","サブウィンドウのフォントサイズ":"17","----ヘルプの設定----":"","ヘルプを利用する":"Switching","ヘルプ用テキスト":"[\"アイテムシーンへ移行します。\", \"スキルシーンへ移行します。\", \"装備シーンへ移行します。\", \"ステータス画面へ移行します。\", \"並び替え機能を実行します。\", \"オプションシーンへ移行します。\", \"セーブ画面へ移行します。\", \"ゲームを終了します。\"]","----文字列の設定----":"","項目名の色":"1","項目内容の色":"0","現在地を表す文字列":"現在地","所持金を表す文字列":"所持金","戦闘回数を表す文字列":"戦闘回数","プレイ時間を表す文字列":"プレイ時間","オプション1":"オプション1","オプション1の内容":"\\V[1]","オプション2":"オプション2","オプション2の内容":"[Chronus2]","----背景の設定----":"","メイン背景の画像":"","メイン背景の設定":"{\"x\":\"0\", \"y\":\"0\", \"width\":\"-1\", \"height\":\"-1\", \"speedX\":\"0.00\", \"speedY\":\"0.00\"}","サブ背景の画像":"","サブ背景の設定":"{\"x\":\"0\", \"y\":\"0\", \"width\":\"-1\", \"height\":\"-1\", \"speedX\":\"0.00\", \"speedY\":\"0.00\"}","パーティクルの画像":"","パーティクルの設定":"{\"x\":\"0\", \"y\":\"0\", \"width\":\"-1\", \"height\":\"-1\", \"speedX\":\"-1.00\", \"speedY\":\"1.00\", \"opacity\":\"150\", \"blendMode\":\"0\"}","パーティクルの点滅":"true","----特殊な設定----":"","比率":"[\"0.00\", \"0.35\", \"0.70\"]","コンテンツの高さ":"{\"class\":\"-1\", \"face\":\"0\", \"name\":\"1\", \"level\":\"2\", \"icons\":\"2\", \"hp\":\"3\", \"mp\":\"4\", \"tp\":\"5\", \"exp\":\"6\"}","ウィンドウスキン":"{\"command\":\"\", \"status\":\"\", \"chapter\":\"\", \"tips\":\"\", \"info\":\"\"}","情報ウィンドウの更新":"-1"}}
];
