'use client'
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import SelectDropdown from '@/components/shared/SelectDropdown'
import MultiSelectImg from '@/components/shared/MultiSelectImg'
import MultiSelectTags from '@/components/shared/MultiSelectTags'
import Loading from '@/components/shared/Loading'
// import AddProposal from './AddProposal'
import { currencyOptionsData } from '@/utils/fackData/currencyOptionsData'
import useDatePicker from '@/hooks/useDatePicker';
import { addDays } from 'date-fns';
import { timezonesData } from '@/utils/fackData/timeZonesData';
import { propasalLeadOptions, propsalDiscountOptions, propsalRelatedOptions, propsalStatusOptions, propsalVisibilityOptions, taskAssigneeOptions, taskLabelsOptions } from '@/utils/options';
import useLocationData from '@/hooks/useLocationData';
import { useSelector } from 'react-redux';

const previtems = [
    {
        id: 1,
        product: "Website design and development",
        qty: 1,
        price: 250
    },
    {
        id: 2,
        product: "Search engine optimization (SEO) optimization",
        qty: 2,
        price: 300
    },
]

const CourtEditContent = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { startDate, endDate, setStartDate, setEndDate, renderFooter } = useDatePicker();
    const { countries, states, cities, loading, error, fetchStates, fetchCities, } = useLocationData();


    useEffect(() => {
        setStartDate(new Date())
        setEndDate(addDays(new Date(), 2))
    }, []);


    return (
        <>
            {loading ? <Loading /> : ""}

            <div className="col-xl-12">
                <div className="card stretch stretch-full">
                    <div className="card-body">
                        <div className="mb-4">
                            <label className="form-label">Subject <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Subject" defaultValue="Website design and development proposal" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Related <span className="text-danger">*</span></label>
                            <SelectDropdown
                                options={propsalRelatedOptions}
                                selectedOption={selectedOption}
                                defaultSelect="lead"
                                onSelectOption={(option) => setSelectedOption(option)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Lead <span className="text-danger">*</span></label>
                            <SelectDropdown
                                options={propasalLeadOptions}
                                selectedOption={selectedOption}
                                defaultSelect="ui"
                                onSelectOption={(option) => setSelectedOption(option)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Discount </label>
                            <SelectDropdown
                                options={propsalDiscountOptions}
                                selectedOption={selectedOption}
                                defaultSelect="no-discount"
                                onSelectOption={(option) => setSelectedOption(option)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Visibility:</label>
                            <SelectDropdown
                                options={propsalVisibilityOptions}
                                selectedOption={selectedOption}
                                defaultSelect="private"
                                onSelectOption={(option) => setSelectedOption(option)}
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Start <span className="text-danger">*</span></label>
                                <div className='input-group date '>
                                    <DatePicker
                                        placeholderText='Pick start date'
                                        selected={startDate}
                                        showPopperArrow={false}
                                        onChange={(date) => setStartDate(date)}
                                        className='form-control'
                                        popperPlacement="bottom-start"
                                        calendarContainer={({ children }) => (
                                            <div className='bg-white react-datepicker'>
                                                {children}
                                                {renderFooter("start")}
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <label className="form-label">Due <span className="text-danger">*</span></label>
                                <div className='input-group date '>
                                    <DatePicker
                                        placeholderText='Pick due date'
                                        selected={endDate}
                                        showPopperArrow={false}
                                        onChange={(date) => setEndDate(date)}
                                        className='form-control'
                                        popperPlacement="bottom-start"
                                        calendarContainer={({ children }) => (
                                            <div className='bg-white react-datepicker'>
                                                {children}
                                                {renderFooter("end")}
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Tags:</label>
                            <MultiSelectTags options={taskLabelsOptions} defaultSelect={[taskLabelsOptions[2], taskLabelsOptions[3], taskLabelsOptions[4]]} />
                        </div>
                        <div className="mb-0">
                            <label className="form-label">Assignee:</label>
                            <MultiSelectImg options={taskAssigneeOptions} defaultSelect={[taskAssigneeOptions[0]]} />
                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-3">
                            <button className="btn btn-md bg-soft-danger text-danger" >Delete</button>
                            <button className="btn btn-md btn-primary" >Add Items</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourtEditContent