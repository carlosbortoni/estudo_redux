import { store } from './store';
import { changeStatus } from './actions/status';

const statusParagraph = document.querySelector('.status');
document
.querySelector('.userName')
.oninput = e => {
    const userName = e.target.value;
    store.dispatch(changeStatus(userName));
};

store.subscribe(() => {
    // obtemos o estado atual, depois da modificação
    const state = store.getState();
    // atualizamos o elemento com o novo valor
    statusParagraph.textContent = state.status;
});