import { AuthUIActions } from '@etn-electrical/derms-blcloud-react-seedui';
import { SAMPLE_EULA } from '../constants/sampleEula';

export const ProjectAuthUIActions = () => (): AuthUIActions => ({
    logIn: (): void => {
        window.location.href = '/dashboard';
    },
    loadEula: (): string => SAMPLE_EULA,
});
