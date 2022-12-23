import React from 'react';
import './Cover.css';

function Cover() {
    return (
        <>
        <div className = "cover-container">
        <div className = "logo">
        </div>
        <div className = "quote">
            <h2>Finding a job would never be easier</h2>
            <h2>The Simplest and most Automatize platform for job search</h2>
        </div>
        <form autocomplete='off' class='form'>
        
        <div class='control block-cube block-input'>
            <input name='username' placeholder='Username' type='text'/>
            <div class='bg-top'>
            <div class='bg-inner'></div>
            </div>
            <div class='bg-right'>
            <div class='bg-inner'></div>
            </div>
            <div class='bg'>
            <div class='bg-inner'></div>
            </div>
        </div>
        <div class='control block-cube block-input'>
            <input name='password' placeholder='Password' type='password'/>
            <div class='bg-top'>
            <div class='bg-inner'></div>
            </div>
            <div class='bg-right'>
            <div class='bg-inner'></div>
            </div>
            <div class='bg'>
            <div class='bg-inner'></div>
            </div>
        </div>
        <button class='btn block-cube block-cube-hover' type='button'>
            <div class='bg-top'>
            <div class='bg-inner'></div>
            </div>
            <div class='bg-right'>
            <div class='bg-inner'></div>
            </div>
            <div class='bg'>
            <div class='bg-inner'></div>
            </div>
            <div class='text'>
            Log In
            </div>
        </button>
        <div class='control'>
            <h2>Don't have an account AND you don't have a Job? </h2>
            <h1>
            Then <a href= "./">Join now</a>
            </h1>
        </div>
        <div class='line'>
        <h2><span>or</span></h2>
        </div>
        </form>

        </div>
        </>
    );
}

export default Cover;