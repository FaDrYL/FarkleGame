#ifndef MAIN_H
#define MAIN_H
class Main
{
public:

	static Main* getInstance();
	int id = 123;
private:
	static Main* instance;
	Main();
};
#endif MAIN_H
