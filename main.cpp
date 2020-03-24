#include <iostream>

int f(int a) {
	return 10 * a;
}


void print () {
	std::cout << "Some text1" << std::endl;
	std::cout << "Some tex2" << std::endl;
	std::cout << "Some text3" << std::endl;
	std::cout << "Some text4" << std::endl;
	std::cout << "Some text555" << std::endl;
	std::cout << "Some text6" << std::endl;
	std::cout << "Some text7" << std::endl;
	std::cout << "Some text8" << std::endl;
	std::cout << "Some text9" << std::endl;
	std::cout << "Some text10" << std::endl;
}

int main () {
	int a = 0;
	std::cin >> a;
	std::cout << f(a) << std::endl;
	return 0;
}
