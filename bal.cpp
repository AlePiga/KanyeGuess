#include <iostream>
#include <ctime>
#include <thread>
#include <condition_variable>
#include <mutex>
#include <cstdlib>
#include <fstream>
#include <queue>
#include <string>
#include <vector>

using namespace std;
using namespace this_thread;
using namespace chrono;

struct Robot {
	int id;
	int x;
	int y;
	int batteria;
	float velocità;
};

condition_variable_any cv;
mutex mtx;
queue<Robot> codaRobot;

void generateData() {
	while (true) {
		sleep_for(seconds(1));

		Robot robot;
		robot.id = rand() % 5 + 1;
		robot.x = rand() % 200 - 100;
		robot.y = rand() % 200 - 100;
		robot.batteria = rand() % 101;
		robot.velocità = (float)(rand() % 10);

		mtx.lock();
		codaRobot.push(robot);
		cv.notify_all();
		mtx.unlock();
	}
}

void robotThread(int robotID) {
	string filename = "robot" + to_string(robotID) + ".txt";
	ofstream output(filename, ios::app); // creato in append

	if (!output) {
		cerr << "errore apertura file!!!";
	}

	while (true) {
		mtx.lock();
		while (codaRobot.empty() || codaRobot.front().id != robotID) {
			cv.wait(mtx);
		}

		Robot data = codaRobot.front();
		codaRobot.pop();
		mtx.unlock();

		output << "Robot #" << data.id << " | Coordinate: (" << data.x << ", " << data.y << ") | Batteria: " << data.batteria << "% | Velocita' : " << data.velocità << "m/s" << endl;
		cout << "Robot #" << data.id << " | Coordinate: (" << data.x << ", " << data.y << ") | Batteria: " << data.batteria << "% | Velocita' : " << data.velocità << "m/s" << endl;
	}

	output.close();
}

int main() {
	srand(time(NULL));
	thread producer(generateData);
	vector<thread> threadsRobot;

	for (int i = 1; i <= 5; i++) {
		threadsRobot.push_back(thread(robotThread, i));
	}

	producer.join();

	for (auto& t : threadsRobot) {
		t.join();
	}

	return 0;
}