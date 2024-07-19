import React, { useState, useEffect } from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoadApiKey() {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        document.title = "Add Your Own Api Key - News Wallah";
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
            const data = await response.json();
            if (response.status == 401) {
                throw new Error(data.fault.faultstring);
            }
            window.location.reload();
            localStorage.setItem('api-key', apiKey);
        } catch (error) {
            toast.error(`Invalid API key`,
                { transition: Flip, autoClose: 4000 }
            );
        }
    };

    return (
        <div className="container" style={{ padding: "5rem" }}>
            <div className="row">
                <div className="col-4 text-center">
                    <img src="/logo512.png" className="rounded" alt="logo" style={{ width: '50%' }} />
                </div>
                <div className="col-8">
                    <h1 style={{ paddingBottom: "1rem" }}>Add Your Own Api Key</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="apiKeyInput" className="form-label">API Key:</label>
                            <input type="text" className="form-control" id="apiKeyInput" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default LoadApiKey;