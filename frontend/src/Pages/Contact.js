import React from 'react'

function Contact() {
  return (
    <div className='contact-page'>
        <div className='container contact'>
            <div className='row'>
                <div className='col-lg-6 col-12 contact-left'>
                    <h3>Bize Ulaşın</h3>
                    <form className='p-0'>
                        <div className='form-group flex-column gap-0 p-0'>
                            <input type="text" className="mail-input mb-20" name="mail" id="mail" placeholder="E-mail"/>
                            <input type="text" className="mail-input mb-20" name="mail" id="mail" placeholder="E-mail"/>
                            <input type="text" className="phone-input mb-20" name="phone" id="phone" placeholder="Telefon"/>
                            <input type="text" className="message-input mb-20" name="message" id="message" placeholder="Sorularınız"/>
                        </div>
                        <button className='form-button w-100' type="submit">Gönder</button>
                    </form>
                </div>
                <div className='col-lg-6 col-12  contact-right'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4747170596006!2d29.064995176528164!3d40.    99298172036579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13     1!3m3!1m2!1s0x14cac7ea10128501%3A0x7f25b9a27a3c5731!2sBusiness%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1734880972945!5m2!1str!2str"></iframe>
                </div>  
            </div>
        </div>
    </div>
  )
}
export default Contact;