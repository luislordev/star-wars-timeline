import { useTranslation } from 'react-i18next'

export const LanguageSelector = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const getCurrentLanguageAbbr = () => {
        console.log(i18n.language);

        return i18n.language === 'es-ES'
            ? 'ES'
            : 'EN'
    };

    return (
        <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost rounded-btn'>
                {getCurrentLanguageAbbr()}
            </label>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52 mt-4">
                <li>
                    <button onClick={() => changeLanguage('es-ES')} type="button">
                        {t('common:language.spanish')}
                    </button>
                </li>
                <li>
                    <button onClick={() => changeLanguage('en-US')} type="button">
                        {t('common:language.english')}
                    </button>
                </li>
            </ul>
        </div>
    )
}
