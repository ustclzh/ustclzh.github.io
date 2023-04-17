---
permalink: /resources/
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /resource/
  - /resource.html
---


# Resources on Gaussian Processes

Gaussian processes (GPs) are a challenging area of Bayesian machine learning to get started with – from wrapping your head around dealing with infinite dimensional Gaussian distributions, to understanding kernel functions and how to choose the right one for the right task, all on top of having solid knowledge of Bayesian inference.

While primarily used as a powerful regression model with the ability to estimate uncertainty in predictions, GPs can also be used for classification, and have a very wide range of applications.

These are some of the resources I have used, or are planning to use in my on-going process of learning about GPs.

## Lectures

- _Iain Murray & Arno Onken (University of Edinburgh)_<br/>
  [**"Machine Learning and Pattern Recognition"**](https://media.ed.ac.uk/channel/Machine+Learning+and+Pattern+Recognition+%282021-2022%29%5BSEM1%5D/230358563) – **requires a University of Edinburgh login**<br/>
  This is a general course on machine learning, but focusing heavily on Bayesian aspects in the second half of the course, including GPs. This was my first introduction to GPs and Bayesian statistics, and both lecturers are great!<br/>
  Accompanying notes: [Gaussian Processes](https://mlpr.inf.ed.ac.uk/2020/notes/w5b_gaussian_processes.html), [Gaussian Processes and Kernels](https://mlpr.inf.ed.ac.uk/2020/notes/w6a_gaussian_process_kernels.html)
- _Richard Turner (Universtiy of Cambridge)_<br/>
  [**"Machine Learning Tutorial Series: Gaussian Processes"**](https://www.youtube.com/watch?v=92-98SYOdlY)<br/>
  This is a great introduction, providing a unique way to visualize GPs that really helps with building intuition.
- _Mauricio Alvarez (University of Sheffield)_<br/>
  [**"Multi Output Gaussian Processes"**](https://www.youtube.com/watch?v=ttgUJtVJthA)<br/>
  An interesting look into the uses and challenges of multi-output GPs, and why to avoid independence assumptions. 
  
## Videos

- _Mutual Information – Duane Rich (YouTube)_<br/>
  [**"Gaussian Processes"**](https://www.youtube.com/watch?v=UBDgSHPxVME)<br/>
  Another great introductory resource. This video offers a detailed yet higher level overview of GPs.

## Books

- _Kevin P. Murphy_<br/>
  [**"Machine Learning: A Probabilistic Perspective"**](https://probml.github.io/pml-book/book0.html), chapters 14 (_Kernels_) and 15 (_Gaussian processes_)<br/>
- _Carl Edward Rasmussen & Christopher K. I. Williams_<br/>
  [**"Gaussian Processes for Machine Learning"**](http://www.gaussianprocess.org/gpml/)
  
**Note**: There are some [new books](https://probml.github.io/pml-book/) by Kevin Murphy that also have some GP content in them.

## Articles

- _Marc Peter Deisenroth, Mark van der Wilk, Yicheng Luo_<br/>
  [**"A Practical Guide to Gaussian Processes"**](https://infallible-thompson-49de36.netlify.app/)<br/>
  A detailed GP guide with interactive tools for visualizing the effect of kernel hyper-parameters.
- _Jochen Görtler, Rebecca Kehlbeck, Oliver Deussen_<br/>
  [**"A Visual Exploration of Gaussian Processes"**](https://distill.pub/2019/visual-exploration-gaussian-processes/)<br/>
  Another interactive guide, though goes into less detail about the mathematical theory of GPs than the above article.
- _Yuge Shi_<br/>
  [**"Gaussian Process, not quite for dummies"**](https://yugeten.github.io/posts/2019/09/GP/)<br/>
  This blog post is essentially a written summary of the above linked GP tutorial lecture by Richard Turner.
- _Martin Krasser_<br/>
  [**"Gaussian processes"**](https://krasserm.github.io/2018/03/19/gaussian-processes/)<br/>
  One of the few posts I could find that do a great job translating the theory of GPs into code examples without relying on existing GP frameworks, and instead building up from fundamental linear algebra using just [NumPy](https://numpy.org/).
- _David Duvenaud_<br/>
  [**"The Kernel Cookbook: Advice on Covariance functions"**](https://www.cs.toronto.edu/~duvenaud/cookbook/index.html)<br/>
  An extremely useful resource for deciding on kernel functions, and understanding how to combine them to model different combinations of effects including linear, exponential and periodic behaviour.

## Papers

- _Seth Flaxman, Andrew Gelman, Daniel Neill, Alex Smola, Aki Vehtari, Andrew Gordon Wilson_<br/>
  [**"Fast hierarchical Gaussian processes"**](https://sethrf.com/files/fast-hierarchical-GPs.pdf)<br/>
  While the main focus of this paper is on improving the computational efficiency of MCMC, the first two sections of the paper also provide a nice brief introduction on hierarchical Gaussian processes, where a hyper-prior is placed on the hyper-parameters of the kernel function.
  
## Applications

These are just a few example applications involving GPs – there are many more areas where they are used!

- _Carl Edward Rasmussen & Christopher K. I. Williams_<br/>
  [**"Model Selection and Adaptation of Hyperparameters"**](http://www.gaussianprocess.org/gpml/chapters/RW5.pdf) in [Gaussian Processes for Machine Learning](http://www.gaussianprocess.org/gpml/)<br/>
  Bayesian optimization is an increasingly popular approach for hyper-parameter tuning, as it explores the hyper-parameter search space in a more sophisticated and efficient way than grid/random searches.
- _Shrihari Vasudevan, Fabio Ramos, Eric Nettleton, Hugh Durrant-Whyte, Allan Blair_<br/>
  [**"Gaussian Process Modeling of Large Scale Terrain"**](http://www.shriharivasudevan.com/papers/icra2009.pdf)<br/>
  This paper looks into how GPs can be used to estimate elevation information in unknown or inaccessible areas, based on recorded data from surrounding locations. The authors focus on field robotics applications such as mine exploration.
- _Niya Chen, Zheng Qian, Xiaofeng Meng, Ian T. Nabney_<br/>
  [**"Short-Term Wind Power Forecasting Using Gaussian Processes"**](https://www.ijcai.org/Proceedings/13/Papers/411.pdf)<br/>
  Accurate forecasting for wind power can be difficult due to how erratic wind behaves. The authors use GPs to make one-day forecasts of wind power, with the aim of improving controlling strategies for wind turbines.
- _Laura Martínez-Ferrer, María Piles, Gustau Camps-Valls_<br/>
  [**"Crop Yield Estimation and Interpretability with Gaussian Processes"**](https://mobiroderic.uv.es/bitstream/handle/10550/76597/141776.pdf?sequence=1&isAllowed=y)<br/>
  This paper looks at how satellite sensor observations and weather data can be combined with GPs to estimate the development and yield of crops.
- _Elizabeth Buckingham-Jeffery, Valery Isham, Thomas House_<br/>
  [**"Gaussian process approximations for fast inference from infectious disease data"**](https://www.sciencedirect.com/science/article/pii/S0025556417303644)<br/>
  With the recent global focus on epidemiology, it is interesting to see how GPs can be applied for deriving MLE population estimates for the number of infectious individuals with a disease at a given time.

## Packages

Below is a list of some well-maintained Python packages that are commonly used to implement GPs.

- [**GPflow**](https://github.com/GPflow/GPflow): A purpose built library just for GPs with a [TensorFlow Probability](https://www.tensorflow.org/probability) back-end, focusing on making GPs more applicable to large-scale datasets.
- [**GPyTorch**](https://github.com/cornellius-gp/gpytorch): Similar to GPflow, but PyTorch-based.
- [**PyMC3**](https://docs.pymc.io/en/v3/) and [**Pyro**](https://pyro.ai/): General probabilistic machine learning packages which also have some GP functionality.

There are other packages such as [GPy](https://sheffieldml.github.io/GPy/) which are quite feature rich, but seem to be far less maintained.

## Other

- [**Gaussian Process Summer Schools**](https://gpss.cc/): Workshops for researchers interested in GP theory and application, normally held in Sheffield, UK. There are also a bunch of great GP resources on this website.
- [**Gaussian Processes Cambridge**](https://www.meetup.com/gaussian-processes-cambridge/): An interest group for developing deeper understanding of GPs, also holding regular meetings (although it appears inactive since January 2021).