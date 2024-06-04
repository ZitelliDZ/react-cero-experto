import { types } from "../../auth/types/types"


describe('types', () => {

    test('should have these types', () => {
        expect(types).toEqual({
            login: '[auth] login',
            logout: '[auth] logout',
        });
    });
});