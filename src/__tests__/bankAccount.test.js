import bankAccount from '../bankAccount'

describe('Bank account methods and properties', ()=>{
  beforeEach(()=>{
    bankAccount.balance = 1000
  })

  test('Initial Balance is 1000', ()=>{
    expect(bankAccount.balance).toBe(1000)
  })

  test('depositMoney should correctly alter balance by amount entered: deposit 50', ()=>{
    bankAccount.depositMoney(50)
    expect(bankAccount.balance).toBe(1050)
  })

  test('withdrawMoney should correctly alter balance by amount entered: withdraw 50', ()=>{
    bankAccount.withdrawMoney(50)
    expect(bankAccount.balance).toBe(950)
  })
})