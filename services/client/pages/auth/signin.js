import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: 'http://localhost:3001/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="insta-title">Instagram</h1>
        <div className="form-container">
          <form className="form" onSubmit={onSubmit}>
            <div className="input-container-1">
              <div className="input-container-2">
                <label className={`label ${email ? 'transform' : ''}`}>
                  <span className="placeholder">
                    Phone number, username, or email
                  </span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className={`input ${email ? 'transform-input' : ''}`}
                  ></input>
                </label>
                <div className="label-div"></div>
              </div>
            </div>
            <div className="input-container-1">
              <div className="input-container-2">
                <label className={`label ${password ? 'transform' : ''}`}>
                  <span className="placeholder">Password</span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className={`input ${password ? 'transform-input' : ''}`}
                  ></input>
                </label>
                <div className="label-div"></div>
              </div>
            </div>
            {errors}
            <button className="button">Log In</button>
          </form>
        </div>
      </div>
      <div className="card">
        <p className="transition-text">
          Don't have an account?{' '}
          <Link href="/auth/signup">
            <a>Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};
