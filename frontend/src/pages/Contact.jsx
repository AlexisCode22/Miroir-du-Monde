import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <p>Page Contact</p>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16688.14420031372!2d4.025556507400927!3d49.25669565321851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e97453295ecf49%3A0x7f480194657cabe2!2sCath%C3%A9drale%20Notre-Dame%20de%20Reims!5e0!3m2!1sfr!2sfr!4v1674744860637!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style={{ border: 0, width: `${100}vw` }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
}

export default Contact;
