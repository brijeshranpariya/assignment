import React, { useState } from 'react'
import Logo from '../assets/icons/logo2.svg'
import Dashboard from '../assets/icons/dashboard.svg'
import upload from '../assets/icons/upload.svg'
import Invoice from '../assets/icons/invoice.svg'
import Schedule from '../assets/icons/schedule.svg'
import Calender from '../assets/icons/calender.svg'
import Notification from '../assets/icons/notification.svg'
import Settings from '../assets/icons/setting.svg'
import boy from '../assets/icons/boy(1).svg'
import lightnoti from '../assets/icons/lightnoti.svg'
import Excel from '../assets/icons/excel.svg'
import Uploadfile from '../assets/icons/uploadfile.svg'
import './Upload.css'
import jsonfile from './../frontend_assigment.JSON'
function Upload() {
    const [jsonObject, setJsonObject] = useState([]);
    const csvtojson = require('csvtojson');
    const droparea = document.getElementById("drop-area");
    const dropinput = document.getElementById("drop-input");
    const imageview = document.getElementById("img-view");
    let file;
    const drag = (event) => {
        event.preventDefault();
        
    }
    const dropfile = async (event) => {
        const spn = document.getElementById('table');
        spn.className="row-span-1";
        event.preventDefault();
        file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = async (e) => {
                const fileContent = e.target.result;
                const data = await convertCsvToJson(fileContent);
                console.log(data);
                setJsonObject(data);
                let array = document.querySelectorAll("values");
            };

            reader.readAsText(file);
        }
        const convertCsvToJson = async (fileContent) => {
            return await csvtojson().fromString(fileContent);
        };

    }
    return (
        <div className=' h-lvh grid grid-flow-col bg-gray-100 overflow-y-hidden'>
            <nav className='bg-white flex h-32 w-lvw sm:hidden md:hidden lg:hidden'>
                <button className=' p-1 h-9 w-11 m-9 flex flex-col justify-around'>
                    <hr className=' py-[1px] bg-black' />
                    <hr className='py-[1px] bg-black' />
                    <hr className='py-[1px] bg-black' />
                </button>
                <div className='flex w-32 relative items-center justify-between border-2'>
                    <img src={Logo} alt="" />
                    <span className='text-2xl mr-2'>Base</span>
                </div>
            </nav>
            <div className='lg:grid md:grid sm:grid hidden bg-white'>
                <span className='h-24 flex justify-center gap-3'>
                    <img src={Logo} className='w-16' alt="" />
                    <span className='my-auto text-4xl font-semibold'>Base</span>
                </span>
                <span className='absolute top-32'>
                    <ul className=' gap-7 flex flex-col pl-12'>
                        <a href=""><li className='flex gap-3 '><img className='w-6' src={Dashboard} alt="" />Dashboard</li></a>
                        <a href=""><li className='flex gap-3'><img className='w-6' src={upload} alt="" />Uplaod</li></a>
                        <a href=""><li className='flex gap-3'><img className='w-6' src={Invoice} alt="" />Invoice</li></a>
                        <a href=""><li className='flex gap-3'><img className='w-6' src={Schedule} alt="" />Schedule</li></a>
                        <a href=""><li className='flex gap-3'><img className='w-6' src={Calender} alt="" />Calender</li></a>
                        <a href=""><li className='flex gap-3'><img className='w-6' src={Notification} alt="" />Notification</li></a>
                        <a href=""><li className='flex gap-3'><img className='w-6' src={Settings} alt="" />Settings</li></a>
                    </ul>
                </span>
            </div>
            <div className='grid grid-flow-row col-span-11'>
                <div className='grid grid-flow-col row-span-1 justify-between items-center px-5 '>
                    <span className='text-2xl ml-3   font-semibold'>Uplaod CSV</span>
                    <span className='gap-8 flex '>
                        <span><img className='mt-3 h-7' src={lightnoti} alt="" /></span>
                        <span><img className='mt-2 h-8' src={boy} alt="" /></span>
                    </span>
                </div>
                <div className='row-span-12 grid '>
                    <span className='grid justify-center items-center'>
                        <span className='bg-white p-3 rounded-xl'>
                            <label htmlFor="uploadfile" onDrop={dropfile} onDragOver={drag} className='border-2 border-dotted flex flex-col' id='drop-area'>
                                <input type="file" accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"' placeholder='' name="uploadfile" id="drop-input" hidden />
                                <span id="img-view" className='flex flex-col items-center gap-3'>
                                    <img src={Excel} alt="" width={'45px'} />
                                    <p className='flex gap-1 text-gray-500'>Drop your excel sheet here or <a href='/' className='text-blue-700'>browse</a></p>
                                </span>
                            </label>
                            <button className='btn p-2 text-white flex gap-2 w-full m-auto mt-2 rounded-lg justify-center'><img src={Uploadfile} alt="" />Uplaod</button>
                        </span>

                    </span>
                    <span id='table' className='row-span-1 hidden'>
                        <h1 className='text-xl font-semibold pl-12'>Uploads</h1>
                        <div className='flex justify-center items-center h-full'>
                            <table className='bg-gray-200 unded-m1 font-semibold mb-5'>
                                <tr className='gap-12 m-2 flex w-[800px]'>
                                    <td className='py-1 font-semibold m-auto'>Si No.</td>
                                    <td className='py-1 font-semibold m-auto'>Links</td>
                                    <td className='py-1 font-semibold m-auto'>Prefix</td>
                                    <td className='py-1 font-semibold m-auto'>Add Tags</td>
                                    <td className='py-1 font-semibold m-auto'>Selected tags</td>
                                </tr>
                                <div className='overflow-y-scroll  h-[300px] '>
                                {jsonObject.map((element, index) => (<tr key={index} className='bg-white m-3 rounded-sm gap-12 flex w-[800px]'>
                                    <td className='h-7 w-[110px] m-auto'>{element.id}</td>
                                    <td className='h-7 w-[110px] m-auto'>{element.links}</td>
                                    <td className='h-7 w-[110px] m-auto'>{element.prefix}</td>
                                    <td className='h-7 w-[110px] m-auto overflow-x-hidden'>{element.selecttags}</td>
                                    <td className='h-7 w-[110px] m-auto'>{element.selectedtags}</td>
                                </tr>))}</div>
                            </table>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Upload