module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/tests/.*/.*|(\\.|/)(test|spec))\\.tsx?$',
    //testRegex: '/tests/user/user-login\\.spec\\.tsx$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    notify: true,
    verbose: true,
    testTimeout: 10000,
    testEnvironment: "node"
};
