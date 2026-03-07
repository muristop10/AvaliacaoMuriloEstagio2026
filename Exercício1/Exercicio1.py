# 1) Sistema de Venda e Fidelidade de Posto de Combustível (Foco em Abastecimento)
from IPython.display import clear_output
erroPadrao = f"\033[31m{"Digite uma opção válida.":^20}\033[0m"
op = ""

def menu():
    print(f'''{"-="*20}\n\033[33m{"Bem vindo ao posto de gasolina!":^20}\033[0m
          Qual operação deseja realizar?
          Digite 1 - Transação de abastecimento
          Digite 2 - Sair''')

def main():
    menu()
    while True:
        try:
            op = int(input(""))
            if (op == 1):
                transacao()
                break
            elif (op == 2):
                print(f"\033[32m{"Programa finalizado!":^20}\033[0m")
                break
            else:
                print(erroPadrao)
        except ValueError:
            print(erroPadrao)

def transacao():
    print(f"É cliente fidelidade? S/N")
    while True:
        try:
            op = input().capitalize()
            if (op == "S"):
                clienteFid = True
                break
            elif (op == "N"):
                clienteFid = False
                break
            else:
                print(erroPadrao)
        except Exception as e:
            print("Erro: ", e)
            break

    print("Agora, insira a quantidade de combustível desejada em litros: ")
    while True:
            try:
                descFixo = False
                litros = float(input())
                if (litros >= 40):
                    descFixo = True
                break
            except ValueError:
                print(erroPadrao)

    print(f'''{"-="*20}\nPor favor, insira o tipo de combustível desejado:
            G - Gasolina Comum - \033[1m{"R$ 5,50/L"}\033[0m
            A - Etanol - \033[1m{"R$ 4,20/L"}\033[0m
            D - Diesel - \033[1m{"R$ 6,80/L"}\033[0m''')
    while True: 
        try:
            op = input().capitalize()
            if (op == "G"):
                total = (litros*5.5)
                totalComDesconto = total - (total/100  * 3)
                op="Gasolina"
                break
            elif (op == "A"):
                total = (litros*4.2)
                totalComDesconto = total - (total/100  * 5)
                op="Etanol"
                break
            elif (op == "D"):
                total = (litros*6.8)
                totalComDesconto = total - (total/100  * 2)
                op="Diesel"
                break
            else:
                print(erroPadrao)
            if (descFixo):
                totalComDesconto -= 5      
        except Exception as e:
            print("Erro: ", e)

    finalizar(total, totalComDesconto, op, clienteFid)
            
def finalizar(total, totalComDesconto, op, clienteFid):
    print(f'''{"-="*20}\nSua opção de combustível foi: \033[32m{op}\033[0m
          Valor total: \033[32mR${total if clienteFid == False else totalComDesconto:.2f}\033[0m
          Deseja refazer? Digite S se sim.''')
    while True:
        try:
            op = input().capitalize()
            if (op == "S"):
                clear_output()
                main()
                break
            else:
                print(f"\033[32m{"Programa finalizado!":^20}\033[0m")
                break
        except Exception as e:
            print("Erro: ", e)

if __name__ == "__main__":
    main()