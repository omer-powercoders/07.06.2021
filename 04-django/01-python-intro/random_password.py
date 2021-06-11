def randomPassword(n):
    
    SpecialSym=['$','@','#']
    return_val=True
    if len(n) < 6:
        print('the length of password should be at least 6 char long')
        return_val=False
    if len(n) > 8:
        print('the length of password should be not be greater than 8')
        return_val=False
    if not any(char.isdigit() for char in passwd):
        print('the password should have at least one numeral')
        return_val=False
    if not any(char.isupper() for char in passwd):
        print('the password should have at least one uppercase letter')
        return_val=False
    if not any(char.islower() for char in passwd):
        print('the password should have at least one lowercase letter')
        return_val=False
    if not any(char in SpecialSym for char in passwd):
        print('the password should have at least one of the symbols $@#')
        return_val=False
    if return_val:
        print('Ok')
    return return_val

print(randomPassword.__doc__)
passwd = input('enter the password : ')
print(randomPassword(passwd))