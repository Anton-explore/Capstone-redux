
import Heading from '../Box/Heading';
import {StyledAddress} from './Address.styles';

import { forwardRef } from 'react';
import { Ref, UniProps } from '../../services/types';
import { CONTACTS, TITLES } from '../../services/props';




const Address = forwardRef<Ref, UniProps>(({id}: UniProps, forwardedRef) => {

    const { tel, mail, skype, twitter, facebook } = CONTACTS;

    return (
        <section id={id} ref={forwardedRef}>
            <Heading title={TITLES.CONT} />
            <StyledAddress>
                <img src={tel.img} alt="phone" />
                <a href={`tel:${tel.link}`}>
                    <strong>{tel.text}</strong>
                </a>
            </StyledAddress>
            <StyledAddress>
                <img src={ mail.img } alt="mail" />
                <a href={`mailto:${mail.link}`}>
                    <strong>{mail.text}</strong>
                </a>
            </StyledAddress>
            <StyledAddress>
                <img src={ twitter.img } alt="twitter" />
                <a href={twitter.link}>
                    <strong>{twitter.text}</strong><br/>
                    {twitter.link}
                </a>
            </StyledAddress>
            <StyledAddress>
                <img src={ facebook.img } alt="facebook" />
                <a href={facebook.link}>
                    <strong>{facebook.text}</strong><br/>
                    {facebook.link}
                </a>
            </StyledAddress>
            <StyledAddress className="skype">
                <img src={ skype.img } alt="skype" />
                <a href={`skype:${skype.link}`}>
                    <strong>{skype.text}</strong><br/>
                    {skype.link}
                </a>
            </StyledAddress>
        </section>
    )
})

Address.displayName = "Address";
    
export default Address;

