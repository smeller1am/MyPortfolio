'use client';

import {Input} from '@/widgets/Input';
import InputMask from 'react-input-mask';
import Select, {OnChangeValue} from 'react-select';
import cn from 'classnames';
import {useFormik} from 'formik';
import moment from 'moment/moment';
import {useGetAllVacancyTypesQuery} from '@/shared/clientApi';
import {useSendVacancyMutation} from '@/shared/clientApi/vacanciesFormApi';
import {useState} from 'react';
import store from '@/app/store';
import {type} from 'os';
import dayjs from 'dayjs';
import {Loader} from "@/shared/ui";
import {ButtonLoader} from "@/shared/ui/buttonLoader";

export interface IVacancyTypes {
    label: string;
    value: string;
}

let selectValue: number;
const VacanciesForm = () => {
    const {data: vacancies} = useGetAllVacancyTypesQuery({});
    const [checkboxState, setCheckboxState] = useState(false);
    const [sendForm] = useSendVacancyMutation({});
    const [vacancyItem , setVacancyItem] = useState({})
    const [requestStatus, setRequestStatus] = useState('')
    const [requestLoading, setRequestLoading] = useState(false)
    const newArray = vacancies?.payload.vacancyTypes.map(
        (el: {
            id?: number;
            name?: string
        }) => ({
            value: el.id,
            label: el.name,
        }),
    );

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            birthDate: 0,
            vacancyTypeId: 0,
            phoneNumber: '',
            previousJob: '',
        },
        onSubmit: async values => {
            try {
                setRequestLoading(true)
                const dateFormat = dayjs(values.birthDate);
                if (selectValue) {
                    values.vacancyTypeId = selectValue;
                }
                values.birthDate = dateFormat.unix();
                await sendForm(values).unwrap().then((res) => {
                    res.isSuccess && setRequestStatus('Заявка отправлена')
                    res.isSuccess && setRequestLoading(false)

                });
                setVacancyItem({})
                formik.resetForm();
            } catch (err) {
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="vacancyForm">
                <div className="vacancyForm__item">
                    <p className="paragraph">Имя</p>
                    <Input
                        required={true}
                        className="inputForm"
                        type="text"
                        name="firstName"
                        placeholder="Введите имя"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                    <p className="paragraph">Фамилия</p>
                    <Input
                        required={true}
                        className="inputForm"
                        type="text"
                        name="lastName"
                        placeholder="Введите фамилию"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    <p className="paragraph">Дата рождения</p>
                    <Input
                        required={true}
                        className="inputForm"
                        type="date"
                        name="birthDate"
                        placeholder="Введите дату рождения"
                        value={formik.values.birthDate}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="vacancyForm__item">
                    <p className="paragraph">Телефон</p>
                    <InputMask
                        required={true}
                        name="phoneNumber"
                        className="inputForm"
                        type="text"
                        placeholder="+7 (___) ___-__-__"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        mask={'+7 (999) 999-99-99'}
                    />
                    <p className="paragraph">Вакансия</p>
                    <div className="select">
                        <svg
                            className="rotate"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 13"
                            fill="none"
                        >
                            <path
                                d="M6.00453 8.03539L10.1441 3.91234C10.34 3.71718 10.6576 3.71723 10.8535 3.91245C11.0494 4.10776 11.0494 4.42443 10.8534 4.61967L6.35972 9.09537C6.17074 9.2836 5.86862 9.29023 5.67166 9.1153C5.66138 9.10658 5.65137 9.09739 5.64166 9.08772L1.14803 4.61202C0.952003 4.41678 0.951952 4.10011 1.14792 3.9048C1.34379 3.70959 1.66135 3.70954 1.85728 3.90469L6.00453 8.03539Z"
                                fill="#8B8E9E"
                            />
                        </svg>
                        <Select
                            classNamePrefix="select"
                            required={true}
                            options={newArray}
                            placeholder={'Выберите'}
                            // closeMenuOnSelect={false}
                            // closeMenuOnScroll={false}
                            // defaultMenuIsOpen={true}
                            value={vacancyItem}
                            onChange={(option: any) => {

                                formik.setFieldValue('vacancyTypeId', option.value);
                                setVacancyItem(option)
                            }
                            }
                        />
                        <Input
                            type="hidden"
                            id="select"
                            name="vacancyTypeId"
                            onChange={formik.handleChange}
                            value={formik.values.vacancyTypeId}
                        />
                    </div>
                    <p className="topSelect paragraph">Предыдущее место работы</p>
                    <Input
                        required={true}
                        className="inputForm"
                        type="text"
                        name="previousJob"
                        placeholder="Укажите"
                        value={formik.values.previousJob}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            {requestStatus && <div className="paragraph paragraph--big">{requestStatus}</div>}
            <div className="send">
                <button
                    type="submit"
                    className={cn('send__button', {
                        'send__button--disable': !checkboxState,
                    })}
                >
                    {requestLoading ? <Loader small={true}/> : "Отправить заявку"}
                </button>
                <div className="send__agree">
                    <div
                        className={cn('send__agree-check', {
                            'send__agree-check--click': checkboxState,
                        })}
                        onClick={() => setCheckboxState(!checkboxState)}
                    >
                        <img src="./img/iconSVG/galochkaLol.png" alt=""></img>
                    </div>
                    <div className="send__agree-text">
                        Соглашаюсь с{' '}
                        <a href="#" className="send__agree-text--orange">
                            политикой обработки персональных данных
                        </a>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default VacanciesForm;
