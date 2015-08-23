VAGRANTFILE_API_VERSION = "2"

Vagrant.configure("2") do |config|
  config.vm.box = "phusion/ubuntu-14.04-amd64"
  config.vm.define "jdr_strongloop"

  config.vm.network "private_network", ip: "192.168.50.6"
  
  config.vm.provider :virtualbox do |vb|
      vb.name = "jdr_strongloop"
	  vb.memory = 2048
	  vb.cpus = 2
  end

  config.vm.provision "shell", path: "scriptDocker.sh"
end