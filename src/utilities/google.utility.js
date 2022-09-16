import {Loader} from 'google-maps';

const loader = new Loader(
    'AIzaSyDDT_k8AY8_W0AztpIOd_4P-lmMQRjk1ic', {
    libraries: ['places']
    }
);

const google = loader;

export default google;

