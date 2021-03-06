const host = 'http://localhost:3030'

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (error) {
            return response;
        }
    } catch (error) {
        alert(error.message); //stop for this task
        throw error;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {},
    };

    const token = localStorage.getItem('authToken');

    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}

export async function login(email, password) {
    const result = await post(host + '/users/login', { email, password });

    localStorage.setItem('email', result.email);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);

    return result;
}

export async function register(email, password) {
    const result = await post(host + '/users/register', { email, password });

    localStorage.setItem('email', result.email);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    const result = await get(host + '/users/logout');

    localStorage.removeItem('email');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');

    return result;
}