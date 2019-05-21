#include "Main.h"

Main* Main::instance = 0;

Main * Main::getInstance()
{
	if (instance == 0) { 
		instance = new Main(); 
	} 
	return instance;
}

Main::Main()
{
}


