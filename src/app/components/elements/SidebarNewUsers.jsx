import React from 'react';
import { SIGNUP_URL } from 'shared/constants';

const SidebarNewUsers = () => (
    <div className="c-sidebar__module">
        <div className="c-sidebar__header">
            <h3 className="c-sidebar__h3">Novo no SteemBR?</h3>
        </div>
        <div className="c-sidebar__content">
            <ul className="c-sidebar__list">
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="/welcome">
                        Guia rapido
                    </a>
                </li>
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="https://steem.io">
                        O blockchain
                    </a>
                </li>
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href="/faq.html">
                        FAQs
                    </a>
                </li>
                <li className="c-sidebar__list-item">
                    <a className="c-sidebar__link" href={SIGNUP_URL}>
                       Cadastre-se
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default SidebarNewUsers;
