import ModalContainer from "./modal/ModalContainer.jsx";
import Icon from "./Icon.jsx";
import { Button, Text } from "./index.js";
import React from "react";

const Conditions = ({ openConditionsModal, closeConditions, acceptConditions, only_read }) => {
  return (
    <ModalContainer isOpen={openConditionsModal} onClose={closeConditions}>
      <div className="relative flex flex-col items-center justify-center gap-4 as:px-2">
        <Icon
          purpose="close"
          onClick={closeConditions}
          className="absolute -top-4 -right-4 as:-right-1 cursor-pointer"
        />
        <Text className="text-base font-bold mb-4 as:mt-2 text-center">
          Kişisel Verilerin İşlenmesine İlişkin Aydınlatma
        </Text>
        <Text className="text-sm text-gray-500 font-light text-center h-[320px] overflow-y-auto">
          Bu uygulama, 6 Şubat 2023 tarihinde Türkiye’de meydana gelen büyük deprem felaketinde, arama kurtarma
          çalışmaları ile yardım ve destek taleplerini ortak bir veri tabanında toplayarak yetkili kurum ve kuruluşlara
          aktarmak amacı ile bilişim teknolojileri alanında çalışan gönüllüler tarafından oluşturulmuştur. Yardım ya da
          desteğe ihtiyacı olduğunu belirttiğiniz kişilerin kişisel verileri ‘’Fiili imkânsızlık nedeniyle rızasını
          açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir
          başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması’’ hukuki sebebine dayanarak, otomatik
          yollarla işlenecektir. Tarafınıza ait kişisel veriler, ‘’Bir hakkın tesisi, kullanılması veya korunması için
          veri işlemenin zorunlu olması’’ hukuki sebebine dayanarak işlenecektir.Paylaşacağınız yardım, destek
          taleplerinde yer alan isim, soy isim, telefon ve adres gibi kişisel veriler, tarafımızca oluşturulan ve
          sunucuları yurtiçi ve yurtdışında bulunan veri tabanında toplanarak, Afad, Akut, Kızılay gibi yetkili arama
          kurtarma kuruluşlarının yanı sıra destek ve yardım taleplerini karşılayabilecek sivil toplum kuruluşları ile
          kişisel veri işleme amacı ile sınırlı olarak paylaşılacaktır. Uygulama vasıtası ile sisteme girilen veriler
          ise uygulamanın afet durumlarında kesintisiz kullanılabilmesi, yoğun kullanımda hata oluşmaması adına GDPR
          uyumlu olarak AWS sunucularında 256bit şifreli barındırılmaktadır. Verilerinizin yurtdışı sunucularında
          saklanmasını tercih etmediğiniz takdirde lütfen sisteme bilgi girişi yapmayınız.
        </Text>
        {!only_read && (
          <div className="max-w-[350px] w-full mt-6">
            <Button purpose="black" height={42} onClick={acceptConditions}>
              Onaylıyorum
            </Button>
          </div>
        )}
      </div>
    </ModalContainer>
  );
};

export default Conditions;
