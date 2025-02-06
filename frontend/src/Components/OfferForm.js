import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FormArea = () => {
    const [isOpen, setIsOpen] = useState({
        select1:false,
        select2:false,
        select3:false,
    });

    const toggleOpen = (key) => {
        setIsOpen((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className='form-area' style={{marginTop:"55px"}}>
            <div className='container form-container'>
                <h2>Teklif Alın</h2>
                <div className='form-title'>
                    <h3>Firma Bilgisi</h3>
                    <h3>Ürün Bilgisi</h3>
                </div>
                <form>
                    <div className='form-input-area'>
                        <div className='form-group'>
                            <input type="text" className="company-input" name="firmaAdi" id="firmaAdi" placeholder="Firma Adı"/>
                            <input type="text" className="mail-input" name="mail" id="mail" placeholder="E-mail"/>
                            <input type="text" className="phone-input" name="phone" id="phone" placeholder="Telefon"/>
                        </div>
                
                        <div className='form-group'>
                            <div className='custom-select'>
                                <select onFocus={() =>toggleOpen('select1')} onBlur={() => toggleOpen('select1')} name="urunBilgisi" id="urunBilgisi">
                                    <option value="" disabled selected>Jeneratör Gücü (kVa)</option>
                                    <option value="jenerator">Jeneratör</option>
                                    <option value="konteynir">Ses İzolasyonlu Konteynır</option>
                                    <option value="paneller">Düşük Voltajlı Paneller</option>
                                </select>
                                <FontAwesomeIcon icon={faAngleDown} className={isOpen.select1 ? 'rotate' : ''}/>
                            </div>
                            <div className='custom-select'>
                                <select onFocus={() =>toggleOpen('select2')} onBlur={() => toggleOpen('select2')}  name="urunBilgisi" id="urunBilgisi">
                                    <option value="" disabled selected>Jeneratör Motoru</option>
                                    <option value="jenerator">Jeneratör</option>
                                    <option value="konteynir">Ses İzolasyonlu Konteynır</option>
                                    <option value="paneller">Düşük Voltajlı Paneller</option>
                                </select>
                                <FontAwesomeIcon icon={faAngleDown} className={isOpen.select2 ? 'rotate' : ''}/>
                            </div>
                            <input type="text" className="message-input" name="message" id="message" placeholder="Sorularınız"/>
                        </div>
                    </div>
                
                    <div className='form-group'>
                        <input type="text" className="message-input" name="message" id="message" placeholder="Sorularınız"/>
                    </div>
                    <button className='form-button' type="submit">Gönder</button>
                </form>
            </div>
        </div>
    );
};

export default FormArea;
