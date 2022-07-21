from random import choice
from userbot import CMD_HELP
from userbot.events import register

# ================= CONSTANT =================
ATATURK = ['Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez' , 'Şuna inanmak gerekir ki, dünya yüzünde gördüğümüz her şey kadının eseridir.' , 'Egemenlik verilmez, alınır.' , 'Yurtta sulh, cihanda sulh.' , 'Hayatta en hakiki mürşit ilimdir.' , 'Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz.' , 'Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.' , 'Gençler cesaretimizi takviye ve idame eden sizlersiniz. Siz, almakta olduğunuz terbiye ve irfan ile insanlık ve medeniyetin, vatan sevgisinin, fikir hürriyetinin en kıymetli timsali olacaksınız. Yükselen yeni nesil, istikbal sizsiniz. Cumhuriyeti biz kurduk, onu yükseltecek ve yaşatacak sizsiniz.' , 'Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu yeterlidir.' , 'Dünyada her şey için, medeniyet için, hayat için, başarı , en hakiki mürşit bilimdir, fendir.' , 'Bilim ve fen nerede ise oradan alacağız ve her ulus kişisinin kafasına koyacağız. Bilim ve fen için kayıt ve şart yokur.' , 'Bir ulusun asker ordusu ne kadar güçlü olursa olsun, kazandığı zafer ne kadar yüce olursa olsun, bir ulus ilim ordusuna sahip değilse, savaş meydanlarında kazanılmış zaferlerin sonu olacaktır. Bu nedenle bir an önce büyük, mükemmel bir ilim ordusuna sahip olma zorunluluğu vardır.' , 'Ben, manevi miras olarak hiçbir nass-ı katı, hiçbir dogma, hiçbir donmuş ve kalıplaşmış kural bırakmıyorum. Benim manevi mirasım, bilim ve akıldır. Benden sonra beni benimsemek isteyenler, bu temel mihver üzerinde akıl ve ilmin rehberliğini kabul ederlerse manevî mirasçılarım olurlar.' , 'Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçin.' , 'Biz cahil dediğimiz zaman, mektepte okumamış olanları kastetmiyoruz. Kastettiğimiz ilim, hakikati bilmektir. Yoksa okumuş olanlardan en büyük cahiller çıktığı gibi, hiç okumak bilmeyenlerden de hakikati gören gerçek alimler çıkabilir.' , 'Bir millet ki resim yapmaz, bir millet ki heykel yapmaz, bir millet ki tekniğin gerektirdiği şeyleri yapmaz, itiraf etmeli ki o milletin ilerleme yolunda yeri yoktur.' , 'Bir millet eğitim ordusuna sahip olmadıkça, savaş meydanlarında ne kadar parlak zaferler elde ederse etsin, o zaferlerin kalıcı sonuçlar vermesi ancak eğitim ordusuyla mümkündür.' , 'Gençliği yetiştiriniz. Onlara ilim ve irfanın müspet fikirlerini veriniz. Geleceğin aydınlığına onlarla kavuşacaksınız.' , 'Hürriyet olmayan bir memlekette ölüm ve çöküş vardır. Her ilerleyişin ve kurtuluşun anası hürriyettir.' , 'Millî hedef belli olmuştur. Ona ulaşacak yolları bulmak zor değildir. Önemli olan, çetin olan o yollar üzerinde çalışmaktır. Denebilir ki hiçbir şeye muhtaç değiliz. Yalnız tek bir şeye çok ihtiyacımız vardır: Çalışkan olmak. Toplumsal hastalıklarımızı incelersek temel olarak bundan başka, bundan önemli bir hastalık keşfedemeyiz; hastalık budur. O halde ilk işimiz bu hastalığı esaslı bir şekilde tedavi etmektir. Milleti çalışkan yapmaktır. Servet ve onun doğal sonucu olan refah ve mutluluk, yalnız ve ancak çalışkanların hakkıdır.' , 'Çalışmak demek, boşuna yorulmak, terlemek değildir. Zamanın gereklerine göre bilim ve teknik ve her türlü uygar buluşlardan azami derecede istifade etmek zorunludur.' , 'Uygarlık yolunda başarı yenileşmeye bağlıdır. Sosyal hayatta, iktisadi hayatta, ilim ve fen sahasında başarılı olmak için yegane gelişme ve ilerleme yolu budur.' , 'Kadınlarımız için asıl mücadele alanı, asıl zafer kazanılması gereken alan, biçim ve kılıkta başarıdan çok, ışıkla, bilgi ve kültürle, gerçek faziletle süslenip donanmaktır. Ben muhterem hanımlarımızın Avrupa kadınlarının aşağısında kalmayacak, aksine pek çok yönden onların üstüne çıkacak şekilde ışıkla, bilgi ve kültürle donanacaklarından asla şüphe etmeyen ve buna kesinlikle emin olanlardanım.' , 'Kadınlarımız için asıl mücadele alanı, asıl zafer kazanılması gereken alan, biçim ve kılıkta başarıdan çok, ışıkla, bilgi ve kültürle, gerçek faziletle süslenip donanmaktır. Ben muhterem hanımlarımızın Avrupa kadınlarının aşağısında kalmayacak, aksine pek çok yönden onların üstüne çıkacak şekilde ışıkla, bilgi ve kültürle donanacaklarından asla şüphe etmeyen ve buna kesinlikle emin olanlardanım.' , 'İki Mustafa Kemal vardır: Biri ben, et ve kemik, geçici Mustafa Kemal... İkinci Mustafa Kemal, onu "ben" kelimesiyle ifade edemem; o, ben değil, bizdir! O, memleketin her köşesinde yeni fikir, yeni hayat ve büyük ülkü için uğraşan aydın ve savaşçı bir topluluktur. Ben, onların rüyasını temsil ediyorum. Benim teşebbüslerim, onların özlemini çektikleri şeyleri tatmin içindir. O Mustafa Kemal sizsiniz, hepinizsiniz. Geçici olmayan, yaşaması ve başarılı olması gereken Mustafa Kemal odur!']
ATATURK_SIIR = [
    """

Fecre benzettiği bayrakla kefenlenmiş Ata,
Çıktı bir kor gibi mermer kapısından sarayın.
Gönlümüz, bayrağı öğrendiği günden beri ta
Duymamıştır bu kadar hüznünü yıldızla ayın!
Gidiyor, gizleyerek sır gibi bizden sesini,
Çıkıyor, ilk olarak bir yola Başbuğ bizsiz.
Biz, ki dünyada, bırakmazdık onun gölgesini,
Bu ne hicranlı seferdir ki beraber değiliz.
Yürüyor, kalbimizin durduğu bir yolda değil,
Kanlı bir gözyaşı nehrinde muazzam tabutun.
Ey ilâhın yüce davetlisi, göklerden eğil,
Göreceksin, duruyor kalbimiz üstünde putun!
Sen ki Gayya'ya düşen on yedi milyon Türk'ün
Dehşetinden sararırken yüzü yaprak yaprak,
Onu bir hızla çevirmiştin ölümden daha dün:
Tunç elin, yalçın iradenle kolundan tutarak.
Ve bugün on yedi milyon geliyor bir yere de,
Ebedî yolculuğundan seni döndürmek için
-Onu yoktan var eden sendeki derman nerede?
Gücü ancak yetiyor kabrine yüz sürmek için
 """,
 """
Şöyle bir doğruldu Mustafa Kemâl 
Kıratının üstünde göklere doğru
Dağlar arasından yükselen 
Tunçtan bir heykele benziyordu. 
Bakışları vardıkça mesafeler ötesine 
Belliydi kaynaştığı gözlerinde
Masmavi okyanus dalgalarına benzer 
Düşünce dalgalarının,
Zafer, diyordu da başka bir şey demiyordu, 
Yüzünün bütün çizgileriyle bu kahraman 
Hissetmişti zaferin kokusunu kırat bile
Yerinde duramıyordu. 
Mağrurdu diğer atlara karşı 
Bir Mustafa Kemâl taşıdığında üstünde 
Dünyalara bedel.
Bir bakışı vardı tepelerden ovalara 
İnan bir bakışı Mustafa Kemâl'in 
Peşinden yürüyordu binlerce kahraman 
O'nun zafere inandığı kadar zafere inanan binlerce insan.
Şöyle bir doğruldu kahramanlar kahramanı 
Kıratının üstünde göklere doğru 
Sabah oluyorken güneşin ilk ışıkları altında 
Tunçtan bir heykele benziyordu. 
 """,
 """
Tükenir elbet 
Gökte yıldız denizde kum tükenir
Bu vatan bu topraklar cömert
Kutsal bir ateşim ki ben sönmez
İnanın Mustafa Kemal'ler tükenmez.
Ben de etten kemiktendim elbet
Ben de bir gün göçecektim elbet
İki Mustafa Kemal'im var iyi bilin
Ben işte o ikincisi sonsuzlukta 
Ruh gibi bir şey görünmez
İnanın Mustafa Kemal'ler tükenmez
Hep kardeşliğe bolluğa giden yolda 
Bilimin yapıcılığın aydınlığında
Güzel düşünceler soyut fikirlerde ben 
Evrensel yepyeni buluşlarda 
Geriliği kovmuşum ben dönmez
İnanın Mustafa Kemal'ler tükenmez
Başın mı dertte beni hatırla 
Duy beni en sıkıldığın an 
Baştan sona her şeyiyle bu vatan
Sakın ağlamasın kasımlarda 
Fatih'ler Kanuni'ler ölmez 
İnanın Mustafa Kemal'ler tükenmez 
 """,
 """
Ah işte duyuyorum mesut günler içinden, 
Sana "sevimli yüzün asla solmasın" diyen, 
Bütün adınla dolu o coşkun şarkıları...
- Sen öldüğün için mi şimdi bayraklar yarı?
Görüyorum ilk defa seni gördüğüm günü;
Altından, alkışlarla geçiyorsun bir takın.
O gün bana gelmiştin babamdan daha yakın
Meğer duyacakmışım bir sabah öldüğünü...
Meğer görecekmişiz bir sabah gidişini,
İstanbul'un önünden son defa geçişini...
Bizler seninle nasıl, ne kadar beraberdik,
Bizler ki az sıkılsak "O başımızda" derdik;
Nasıl yok bileceğiz o güzel güneş yüzü?
Ana, baba değil bu, bizler Ata öksüzü
Tatmadık, bilmiyoruz bu bambaşka yarayı, 
Öğret bize yarabbim ah O'nsuz yaşamayı!
 """,
 """
Samsun'a ayak basmış kahraman bugün,
Çayır, çimen yeşermiş zafer yolunda.
Davul zurna sesinde şahlanır düğün,
Gönlüm coşup öter bir bahar dalında.
Ata'nın rüyasına gelincikler sun,
Emek bahçelerinin güzel gülünü.
Bir sonsuz bir sabahtayız... o uyusun,
Sevincimiz coşturur onun gönlünü.
Nasıl çıkmış bir saban Samsun'dan yola
Dağlardan dağlara o zafer türküsü,
Şahlanıp bayrak çekmiş her eski kola,
Taze bir bahar açmış yurdun gözünü.
Al bayrağım Ankara kalesinde hür,
Dalgalanmakta altın bir çağa doğru,
Yeni kahramanlar kol kol, boy boy yürür
Şu karlı dağlardaki bayrağa doğru.
19 Mayıs'ın hür başına çelenk,
Kiraz mevsimi, gençlik ayı, gül ayı.
Bir bahar bahçesinde gönüller renk renk,
Şu sonsuz koşuya bak, sarmış yaylayı.
 """,
 """
Sabahlar, her zaman güzel değildir,
Her zaman ayrılık akşamla gelmez. 
Al atlar sırtında hoyrattır fecir, 
Hoyrattır, ne kalbler kırmıştır, bilmez.
Sabahlar her zaman güzel değildir.
Vakti, bir yerinden bölünce şafak 
İri ve rüyalı gözlerle müphem;
Nur olmuş içimde sanırım ak pak 
Ayrı bir mânada korktuğum adem,
Eski düşüncemde, rahat ve uzak.
Fethe çıkmış gibi duyarım birden
Eşsiz gururunu bir cihangirin.
Ufuklar üstünde yüzen tekbirden
Vatanca büyümüş asil ve derin
Bir matem tütmekte şimdi fecirden
Nefti yalnızlığı başlar zamanın 
Mağfiret ürperir, dağılır, uçar.
Ölüm korkusuyle dolu bir anın
Müphem uzletinde ebedî ruhlar;
Nefti yalnızlığı başlar zamanın.
Rüzgar esmez olmuş, sular durgundur, 
Bir garip hali var Dolmabahçe'nin;
Hala içimizde yüzen gecenin 
Aydınlık bilmeyen devamı durur,
Rüzgar esmez olmuş, sular durgundur.
Ruh için, ölümsüz, derler cihanda, 
Her mevsim onunla güzel her seher 
Bütün esatiri parçalasan da 
Atatürk önünde mağlupsun kader!
Ruh için, ölümsüz derler cihanda. 
 """,
 """
Bir ağıt söyleyeyim, dağlar dilinden 
Dumlu'dan Ağrı'ya ün gitsin gelsin!...
Destanlar duyulsun tarih yolundan, 
O günden dünlere şan gitsin gelsin...
Çekin küheylanın atlasın binsin,
Al yelelerinde yankılar dönsün.
Afyon'dan İzmir'e ordular insin.
Süngü uçlarından can gitsin gelsin...
Neymiş yarım?! Sancak çekilsin uca, 
Şılasın göklerde yüceden yüce
Sormak lüzum değil, halimiz nice?
Yanan yüreklerden kan gitsin gelsin...
Sen ey yayda bir ok gibi kurulu!
Bir ok değdi, düştün yere yaralı!
Dört yanında ak mermerler örülü, 
Sars devir bunları, sin gitsin gelsin...
Gökyay'ım neylesin ıssız çağlarda!
Bir ağlar bir güler, durmaz kararda,
Bir başka dağ gibi sen dur dağlarda, 
Akşamdan sabaha gün gitsin gelsin...
 """,
 """
Atatürküm eğilmiş vatan haritasına 
Görmedim tunç yüzünde böylesine geceler 
Atatürk neylesin memleketin yarasına
Uçup gitmiş elinden eski makbul çareler
Nerde istiklâl harbinin o mutlu günleri 
Türlü düşmana karşı kazanılan zaferi 
Hiç sanmam öyle ağarsın bir daha tan yeri 
Atatürküm ben ölecek adam değildim der.
Git hemşehrim git kardeşim toprağına yüz sür
Odur karşı kıyadan cümlemizi düşünür 
Resimlerinde bile melül mahzun düşünür 
Atatürküm kabrinde rahat uyumak ister. 
 """,
 """
Türk'ü ölümden 
Odur kurtaran 
Odur yeniden 
Türklüğü kuran.
Yaptığı ordu 
Düşmanı kovdu. 
Ulusu, yurdu
Odur yaratan.
Türk'ün dileği 
Onun ereği. 
Yüce yüreği
Türklüğe vatan.
Bu memleketi, 
Cumhuriyeti
Canıyle etti
Bize armağan.
Atamızsın sen, 
Adımız senden. 
Yürür izinden
Sana inanan.
Ülküm yürüsün,
Türklük büyüsün
Sen Atatürk'sün
Ey yüce Başkan!
 """,
 """
Tuttun elimizden çıktık sefere, 
Kurtardık vatanı, milleti Atam. 
Serdik kör denilen talihi yere,
Zaferdir savaşın nimeti Atam.
Dağlar altımızda at oldu bizim.
Sen dedin:-Uyan Türk! Açıldı gözüm. 
Sakarya suyundan yununca yüzüm, 
Bilindi Türklüğün kıymeti Atam.
Duyarım, dalgalar sahili döğer, 
Sen sade bir "Paşa" olaydın eğer 
Yine kalbimizde alacaktın yer, 
Sensin bu vatanın ziyneti Atam.
Bir eşin varmıydı civanmertlikte?
İyi ettik sana "Ata" dedik te;
Sevgin göğsümüzde, eller tetikte, 
Sendin bize Tanrı himmeti Atam
Her Türk olan "Atam" der de tutuşur, 
İşitir emrini derdi yatışır;
Kâfi bu teselli ona yetişir;
Sana lâyık olmak niyeti Atam. 
"""
]

@register(outgoing=True, pattern="^atatürk$")
async def ataturk(e):
    await e.edit(f"`{choice(ATATURK)}`")

@register(outgoing=True, pattern="^atatürk şiir")
async def ataturks(e):
    await e.edit(f"`{choice(ATATURK_SIIR)}`")


CMD_HELP.update({
    "ataturk":
    ".atatürk\
    \nKullanım: Bir Atatürk sözü.\
    .atatürk şiir\
    \nKullanım: Atatürk için yapılan bir şiir."
})
