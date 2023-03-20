import phone from '../../assets/images/phone.svg';
import mail from '../../assets/images/mail.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import skype from '../../assets/images/skype.svg';
import Heading from '../Box/Heading';
import { StyledAdress} from './Address.styles';

import { forwardRef } from 'react';

interface AddressProps {
    id: string
}

export type Ref = HTMLElement;

const Address = forwardRef<Ref, AddressProps>(({id}: AddressProps, forwardedRef) => {

    return (
        <section id={id} ref={forwardedRef}>
            <Heading title='Contacts' />
            <StyledAdress>
                <img src={phone} alt="phone" />
                <a href="tel:+500 342 242">
                    <strong>500 342 242</strong>
                </a>
            </StyledAdress>
            <StyledAdress>
                <img src={ mail } alt="mail" />
                <a href="mailto:famtripuae19@gmail.com">
                    <strong>famtripuae19@gmail.com</strong>
                </a>
            </StyledAdress>
            <StyledAdress>
                <img src={ twitter } alt="twitter" />
                <a href="https://twitter.com/wordpress">
                    <strong>Twitter</strong><br/>
                    https://twitter.com/wordpress
                </a>
            </StyledAdress>
            <StyledAdress>
                <img src={ facebook } alt="facebook" />
                <a href="https://www.facebook.com/facebook">
                    <strong>Facebook</strong><br/>
                    https://www.facebook.com/facebook
                </a>
            </StyledAdress>
            <StyledAdress className="skype">
                <img src={ skype } alt="skype" />
                <a href="skype:kamsolutions.pl">
                    <strong>Skype</strong><br/>
                    kamsolutions.pl
                </a>
            </StyledAdress>
        </section>
    )
})

Address.displayName = "Address";
    
export default Address;

