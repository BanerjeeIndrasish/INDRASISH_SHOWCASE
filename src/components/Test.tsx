import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type Validation = {
    phone: string;
    email: string;
}

const Test = () => {
    const [list, setList] = useState<Post[]>([]);
    const [form, setForm] = useState<Validation>({ phone: '', email: '' });
    const [errors, setErrors] = useState<Validation>({ phone: '', email: '' });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(setList);
    }, []);

    const Row = ({ index, style }: any) => {
        const item = list[index];

        if (!item) return <div>No data</div>;
        // console.log('Rendering item:', index);
        return (
            <div style={{
                ...style,
                padding: '16px',
                boxSizing: 'border-box',
                border: '1px solid #e5e7eb'
            }}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        );
    };


    const checkValidation = (key: string, value: string) => {
        switch (key) {
            case 'email':
                if (!value) return ''
                const isValidEmail = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value);
                return isValidEmail ? '' : 'Invalid email';
            case 'phone':
                if (!value) return ''
                const isValidPhone = (/^[6-9]\d{9}$/).test(value);
                return isValidPhone ? '' : 'Invalid phone';
            default: return '';
        }
    }

    const handleChange = (key: string, value: string) => {
        setForm(prev => ({ ...prev, [key]: value }))
        setErrors(prev => ({ ...prev, [key]: checkValidation(key, value) }));
    }

    useEffect(() => {
        console.log('Check');
    })

    return (
        <>
            <h1>Test Component</h1>
            {/* <List
                height={360}
                itemCount={list.length}
                itemSize={120}
                width="100%"
            >
                {Row}
            </List> */}


            <form onSubmit={(e) => { e.preventDefault(); console.log('Form submit', form) }}>
                <div className="p-6 border border-black-300 flex flex-col gap-10">
                    <div className="flex flex-col gap-1">
                        <label>Phone</label>
                        <input value={form?.phone} onChange={e => handleChange('phone', e?.target?.value)} />
                        {errors?.['phone'] && <p className="text-red-600">{errors['phone']}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Email</label>
                        <input value={form?.email} onChange={e => handleChange('email', e?.target?.value)} />
                        {errors['email'] && <p className="text-red-600">{errors['email']}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>


        </>
    );
};

export default Test;