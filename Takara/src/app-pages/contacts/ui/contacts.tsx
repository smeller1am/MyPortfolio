import MapsComponent from '@/widgets/maps/ui/MapsComponent';
import { FC } from 'react';
import { getContacts, getSocials } from '@/shared/serverApi/contacts';
import { SocialLinks } from '@/features/social-links';

export const ContactsPage: FC = async () => {
  const contacts = await getContacts();
  const socials = await getSocials();
  const middleIndex = contacts?.branchs?.length && Math.ceil(contacts?.branchs?.length / 2);
  return (
    <div className="container">
      <div className="wrapper"></div>
      <div className="titleMain">
        <h1 className="titleMain__title">Контакты</h1>
      </div>
      <div className="contactMain">
        <div className="contactMain__info">
          <div className="contactMain__info-number">
            <div className="contactMain__info-icon icon-phone"></div>
            <div className="contactMain__info-numberBlock">
              <p className="paragraph">Единый номер</p>
              <a href={`tel:${contacts?.phoneNumber}`} className="contactMain__info-numberLink">
                {contacts?.phoneNumber.split(')')[0]})
                <span>{contacts?.phoneNumber.split(')')[1]}</span>
              </a>
              <div className="paragraph">{contacts?.workingTime}</div>
            </div>
          </div>
        </div>
        <h2 className="miniTitle">Наши адреса</h2>
        <div className="contactInfo">
          <div className="contactInfo__item">
            {contacts?.branchs.slice(0, middleIndex).map((el, index) => {
              return (
                <div key={index} className="contactInfo__item-block">
                  <p className="paragraph">{el.neighborhood}</p>
                  <div className="contactInfo__item-container">
                    <div className="contactInfo__item-adress">{el.address}</div>
                    <a href={`tel:${el.phoneNumber}`} className="contactInfo__item-phone">
                      {el?.phoneNumber.split(')')[0]})<span>{el?.phoneNumber.split(')')[1]}</span>
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="contactInfo__item-block">
              <p className="paragraph">Контроль качества: </p>
              <a
                href={`tel:${contacts?.qualityControlPhoneNumber}`}
                className="contactInfo__item-phone"
              >
                {contacts?.qualityControlPhoneNumber.split(')')[0]})
                <span>{contacts?.qualityControlPhoneNumber.split(')')[1]}</span>
              </a>
            </div>
          </div>

          <div className="contactInfo__item">
            {contacts?.branchs.slice(middleIndex).map((el, index) => {
              return (
                <div key={index} className="contactInfo__item-block">
                  <p className="paragraph">{el.neighborhood}</p>
                  <div className="contactInfo__item-container">
                    <div className="contactInfo__item-adress">{el.address}</div>
                    <a href={`tel:${el.phoneNumber}`} className="contactInfo__item-phone">
                      {el?.phoneNumber.split(')')[0]})<span>{el?.phoneNumber.split(')')[1]}</span>
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="contactInfo__item-block">
              <p className="paragraph">Мы в соцсетях:</p>

              <SocialLinks
                parentClassName="contactInfo__item-social"
                iconClassName="contactInfo__item-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mapContainer">
        <MapsComponent />
      </div>
    </div>
  );
};
