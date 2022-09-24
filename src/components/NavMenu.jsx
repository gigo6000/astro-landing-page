import { Menu, Transition } from "@headlessui/react";

const NavMenu = () => {
  return (
    <nav>
      <ul class="hidden lg:flex lg:space-x-7 lg:ml-14">
        <li>
          <Menu>
            <Menu.Button className="hover:text-almost-black">
              Features
              <img
                class="inline-block ml-1"
                src="images/icon-arrow-down.svg"
                alt="Icon arrow down"
              />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/account-settings"
                    >
                      <img
                        src="images/icon-todo.svg"
                        className="inline w-4 mr-3"
                        alt="Todo List Icon"
                      />
                      Todo list
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/account-settings"
                    >
                      <img
                        src="images/icon-calendar.svg"
                        className="inline w-4 mr-3"
                        alt="Calendar Icon"
                      />
                      Calendar
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/account-settings"
                    >
                      <img
                        src="images/icon-reminders.svg"
                        className="inline w-4 mr-3"
                        alt="Reminders Icon"
                      />
                      Reminders
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/account-settings"
                    >
                      <img
                        src="images/icon-planning.svg"
                        className="inline w-4 mr-3"
                        alt="Planning Icon"
                      />
                      Planning
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li>
          <Menu>
            <Menu.Button className="hover:text-almost-black">
              Company
              <img
                class="inline-block ml-1"
                src="images/icon-arrow-down.svg"
                alt="Icon arrow down"
              />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-4 w-[8rem] py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/account-settings"
                    >
                      History
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/account-settings"
                    >
                      Our Team
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-gray-100 text-gray-900"
                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                      href="/account-settings"
                    >
                      Blog
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="cursor-pointer hover:text-almost-black">Careers</li>
        <li className="cursor-pointer hover:text-almost-black">About</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
