import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';


const items = [
    {
        'Title': '19 Lac +',
        'SubTitle': 'Members',
        Icon: <GroupsIcon sx={{ fontSize: 35 }} />
    },
    {
        'Title': '150 +',
        'SubTitle': 'Courses',
        Icon: <OndemandVideoIcon sx={{ fontSize: 35 }} />
    },
    {
        'Title': '4.7',
        'SubTitle': 'Google Rating',
        Icon: < StarBorderIcon sx={{ fontSize: 35 }} />
    },
    {
        'Title': '6 Lac +',
        'SubTitle': 'App Installs',
        Icon: < AppShortcutIcon sx={{ fontSize: 35 }} />
    },
]

const Highlights = () => {
    return (
        <div className='bg-[#012478] text-[#012478] mt-[40px] flex justify-around'>
            {items.map((item, i) => (
                <div className='flex align-middle' key={i}>
                    <div className='text-center text-lg p-2 w-15 h-15 bg-white rounded-full justify-center my-5'>
                        {item.Icon}
                    </div>
                    <div className='text-white m-4 '>
                        <h3 className='text-2xl'>{item.Title}</h3>
                        <h4>{item.SubTitle}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Highlights