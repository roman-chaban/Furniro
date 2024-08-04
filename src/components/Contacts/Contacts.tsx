import { contactInfo, inputs } from "@/constants/contactInfo";
import { Benefits } from "../Shop/Benefits";
import { Poster } from "../UI components/Poster/Poster";
import styles from "./Contacts.module.scss";

export const Contacts: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <Poster title={"Contact"} linkPrev={"Home"} linkNext={"Contact"} />
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Get In Touch With Us</h2>
        <p className={styles.description}>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className={styles.formsAndContact}>
          <div className={styles.contactContainer}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.adressContainer}>
                <div dangerouslySetInnerHTML={{ __html: info.svg }} className={styles.svgIcon} />
                <p className={styles.contactTitle}>{info.contactTitle}</p>
                {info.contacts.map((contact, index) => (
                  <p key={index} className={styles.contact}>
                    {contact}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.formsContainer}>
            {inputs.map((inp) => (
              <div className={styles.form} key={inp.name}>
                <p className={styles.inputName}>{inp.name}</p>
                <input
                  className={styles.input}
                  type={inp.type}
                  placeholder={inp.placeholder}
                ></input>
              </div>
            ))}
            <div className={styles.form}>
                <p className={styles.inputName}>Message</p>
                <textarea
                  className={styles.textarea}
                  placeholder="Hi! i’d like to ask about"
                ></textarea>
            </div>
            <button className={styles.formButton}>Submit</button>
          </div>
        </div>
      </div>
      <Benefits />
    </section>
  );
};
