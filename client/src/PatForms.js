import Informed_Consent from "./paperwork/Informed_consent_reg.pdf";
import COVID_Consent from "./paperwork/COVID_Consent.pdf";
import {Button, Card, Icon} from 'semantic-ui-react';

function PatForms() {

    return(
        <div>
            <h3>Please download and fill out these forms before your first appointment</h3>
            <Button color="blue" as='a' href={Informed_Consent} download="Informed_Consent">
                <Icon name="download" />
                Download Consent file
            </Button>
            <Button color="blue" as='a' href={COVID_Consent} download="COVID_Consent">
            <Icon name="download" />
                Download Covid Consent file
            </Button>
            </div>
    )
}

export default PatForms