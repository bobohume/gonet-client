#pragma once

#include <vector>
#include <iostream>
#include <map>
#include "Base/bigInt.h"

namespace Base
{
class Dh
{
public:
	Dh() :q(BigInt(97)), a(BigInt(5))
	{
		generatePrik();
		generatePubk();
	}

	~Dh()
	{
	}

	void ExchangePubk(long long int key)
	{
		Y2 = BigInt(key);
	}

	long long int ShareKey()
	{
		auto k = Base::pow(Y2, x.to_int());
		k  = k % q;
		return k.to_long_long();
	}

	long long int PubKey()
	{
		return Y1.to_long_long();
	}
private:
	void generatePrik()
	{
		x = BigInt(std::rand()) % q;
		x = x + BigInt(1);
	}

	void generatePubk()
	{
		auto a1 = a;
		Y1 = pow(a, x.to_int());
		Y1 = Y1 % q;
	}

private:
	BigInt q;//����q
	BigInt a;//q��ԭ��a
	BigInt x;//˽Կ
	BigInt Y1;//�Լ���Կ
	BigInt Y2;//�Է���Կ
};
}
